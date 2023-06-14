// Definicao de tipos -> isso tudo pro FastifyJwt reconhecer a variavel adicional
import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      sub: string
    }
  }
}
