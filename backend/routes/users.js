const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/user');

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
    console.log(req.body)
    const parseData = 
    
    console.log(parseData)
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
    res.status(201).json({"Novo cadastrado": withoutPassword})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.patch('update/:id', async(req, res, next) => {
  const userId = req.user.userId;
  const payload = req.body;

  const user = await prisma.user.findUnique({
    where: {id: userId},
  })

  if (!user) {
    return res.status(404).json({ message: 'Not Found'})
  }

  const updateUser = await prisma.user.update({
    where: {id: userId},
    data: { ...payload},
  })

  return res.status(200).json({
    message: 'User Updated',
    data: { user: updatedUser },
  })
})

module.exports = router;
