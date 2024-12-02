const express = require('express');
const router = express.Router();
const { userSchema, userUpdateSchema } = require('../schemas/user'); // Corrigido a importação
const validate = require('../middlewares/validate');

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create user
router.post('/register', async (req, res) => {
  try {
    const parseData = userSchema.parse(req.body);

    // Check if user already exists
    const userExists = await prisma.user.findUnique({
      where: {
        cpf: parseData.cpf
      }
    });

    if (userExists) {
      return res.status(400).json({
        error: 'CPF já cadastrado.'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(parseData.password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        ...parseData,
        birthDate: parseData.birthDate ? new Date(parseData.birthDate) : null,
        password: hashedPassword
      },
    });

    const { password, ...userWithoutPassword } = user;
    res.status(201).json({"Novo usuário criado: ": userWithoutPassword});

  } catch (err) {
    console.error(err);
    if (err.errors) {
      return res.status(400).json(err.errors);
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Router for update user
router.patch('/updateUser/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    
    const newData = userUpdateSchema.parse(req.body)

    // Get user Id
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    // Verify if userId exists
    if (!user) {
      return res.status(404).json({'Erro': 'O usuário requisitado não foi encontrado'});
    }

    // If user try to change password, hash it
    if (newData.password) {
      newData.password = await bcrypt.hash(newData.password, 10);
    }

    // Then, update the user data
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { ...newData },
    });

    // Remove user password from the response
    delete updatedUser.password;

    // Send success response
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'User updated.',
      data: { user: updatedUser },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({'Erro': error});
  }
});

// Delete user
router.delete('/deleteUser/:id', async (req, res) => {
  // Localize the user by Id and delete it
  try {
    const userId = parseInt(req.params.id);

    // Get user Id
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }                                                                                                                                            
    });

    // Verify if userId exists
    if (!user) {
      return res.status(404).json({'Erro': 'O usuário requisitado não foi encontrado'});
    }

    // Delete user
    await prisma.user.delete({
      where: {
        id: userId
      }
    });

    // Send success response
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'User deleted.',
    });
  } catch (error) {
    res.status(400).json({'Erro': error});
  }
});

// Router to list all users
router.get('/listUsers', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json({
      success: true,
      status: 200,
      message: 'Users listed.',
      data: { users },
    });
  } catch (error) {
    res.status(400).json({'Erro': error});
  }
});

// Router to list just one user
router.get('/listUser/:cpf', async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const user = await prisma.user.findUnique({
      where: {
        cpf: cpf
      }
    });

       // Verify if user exists
      if (!user) {
        return res.status(404).json({'Erro': 'O usuário requisitado não foi encontrado'});
      }
    return res.status(200).json({user});
  } catch (error) {
    console.log(error)
    res.status(400).json({'Erro': error});
  }
});

module.exports = router;
