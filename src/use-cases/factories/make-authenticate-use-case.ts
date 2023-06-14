import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const usersRespsitory = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(usersRespsitory)

  return authenticateUseCase
}
