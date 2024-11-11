const { z } = require("zod");

const userSchema = z.object({
  fullName: z.string().min(1),
  password: z.string().min(6),
  email: z.string().email(),
  phone: z.string(),
  birthDate: z.string().optional(), 
  cep: z.string().max(8),
  cpf: z.string().max(11),
});

const userUpdateSchema = userSchema.pick({
  fullName: true,
  password: true,
  email: true,
  phone: true,
  cep: true
}).partial();

module.exports = {
  userSchema,
  userUpdateSchema
};