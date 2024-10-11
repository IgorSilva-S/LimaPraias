const { z } = require('zod')

const userSchema = z.object({
    fullName: z.string().min(1),
    phone: z.string().max(14),
    email: z.string().email(),
    birthDate: z.string(),
    cep: z.string().max(8).optional(),
    password: z.string().min(1),
    cpf: z.string().max(11)
})

module.exports = userSchema