const { z } =  require('zod')

const prodSchema = z.object({
    type: z.string(),
    value: z.number(),
    available: z.boolean(),
    number: z.number()
})

const upProdSchema = prodSchema.pick({
    available: true,
    number: true
  }).partial()

module.exports = prodSchema
module.exports = upProdSchema