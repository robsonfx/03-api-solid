import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register'

// factore pattern
export function makeRegisterUseCase() {
  const usersRespsitory = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(usersRespsitory)

  return registerUseCase
}
