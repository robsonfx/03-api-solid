import { FastifyInstance } from 'fastify'

import { authenticate } from './authenticate'
import { profile } from './profile'
import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { register } from '../register'
import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate) // authenticate

  app.patch('/token/refresh', refresh)

  /** Se autenticado */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
