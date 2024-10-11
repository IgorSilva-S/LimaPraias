const express = require('express');
const router = express.Router();

const userSchema = require("../schemas/userSchema");
const bcrypt = require("bcrypt");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Cadastrar usuário
router.post("register", async (req, res) => {
  try {

  } catch (error) {
    if (error.errors) {
      return res.status(400).json({ errors: error.errors})
    }
    res.status(500).json({error: "Internal Server Error"})
  }
})

module.exports = router;
