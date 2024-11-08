const express = require('express');
const router = express.Router();
const prodSchema = require('../schemas/product');
const upProdSchema = require('../schemas/product');
const validate = require('../middlewares/validate');

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router for register a new user
router.post('/newProduct', validate(prodSchema), async (req, res) => {
  
  // Validate the request body
  try {
    const parseData = prodSchema.parse(req.body);

    // Getting the user data for create a new user
    const newProduct = await prisma.product.create({
      data: {
        type: parseData.type,
        value: parseData.value,
        available: parseData.available,
        number: parseData.number
      }
    })

    return res.status(201).json({
			success: true,
			status: 201,
			message: 'A new product has been created.',
			data: {
				product: newProduct,
			},
		});
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.put('/changeAvailability/:id', validate(upProdSchema), async (req, res) => {
  const prodId = req.params.id
  const updateData = upProdSchema.parse(req.body)

  const isProdValid = await prisma.product.findUnique({
    where: {
      id: prodId
    }
  })

  if (!isProdValid) {
    res.send(404).json({"error": "Esse produto não existe"})
  }

  const upProduct = await prisma.product.update({
    where: { id: prodId },
    data: { ...updateData }
  })

  return res.status(200).json({
    success: true,
    status: 200,
    message: `O produto com id ${prodId} foi atualizado com sucesso!`,
    data: { produto: upProduct },
  });
})

module.exports = router;
