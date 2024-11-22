const { z } = require("zod");

const userSchema = z.object({
  fullName: z.string().min(1).optional(),
  password: z.string().min(6).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  cep: z.string().max(8).optional(),
  cpf: z.string().max(11).optional(),
});

const userUpdateSchema = userSchema.pick({
  fullName: true,
  password: true,
  email: true,
  phone: true,
  cep: true
}).partial()

module.exports = {
  userSchema,
  userUpdateSchema
};