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
    res.status(201).json({"Novo cadastrado": withoutPassword})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router;
