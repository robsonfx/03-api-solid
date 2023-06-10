import { PrismaUsersRespository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const usersRespsitory = new PrismaUsersRespository()
  const authenticateUseCase = new AuthenticateUseCase(usersRespsitory)

  return authenticateUseCase
}
