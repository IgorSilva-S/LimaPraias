const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/user');
const upUserSchema = require('../schemas/user');
const validate = require('../middlewares/validate');

const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const prisma = new PrismaClient()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router for register a new user
router.post('/register', async (req, res) => {
  
  // Validate the request body
  try {
    const parseData = userSchema.parse(req.body);
    const isSameCpf = await prisma.user.findUnique({
      where: {
        cpf: parseData.cpf
      }
    })

    // Check if the CPF is already registered
    if (isSameCpf) {
      return res.status(400).json({ error: 'CPF já registrado' })
    }

    // Hash the password
    const cryptPassword = await bcrypt.hash(parseData.password, 10)

    // Getting the user data for create a new user
    const newUser = await prisma.user.create({
      data: {
        fullName: parseData.fullName,
        password: cryptPassword,
        email: parseData.email,
        phone: parseData.phone,
        birthDate: parseData.birthDate,
        cep: parseData.cep,
        cpf: parseData.cpf
      }
    })

    // Return the new user data in JSON format (without the password)
    const {password, ...withoutPassword} = newUser
    return res.status(201).json({
			success: true,
			status: 201,
			message: 'User created.',
			data: {
				user: newUser,
			},
		});
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.patch('/updateUser/:id', validate(upUserSchema), async (req, res) => {
  try {
    const userId = req.params.id
    const newData = req.body
    console.log(userId)

    //Get user Id
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })

    //Verify if userId exists
    if (!user) {
      res.status(404).json({'Erro': 'O usuário requisitado não foi encontrado'})
    }

    //If user try to change password, hash it
    if (newData.password) {
      newData.password = await bcrypt.hash(newData.password, 10)
    }

    //Then, update the user data
    const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: { ...newData },
		});

    //Remove user password from the response
    delete updatedUser.password;

    //send success response
		return res.status(200).json({
			success: true,
			status: 200,
			message: 'User updated.',
			data: { user: updatedUser },
		});
  } catch (error) {
    res.status(400).json({'Erro': error})
  }
})

module.exports = router;
