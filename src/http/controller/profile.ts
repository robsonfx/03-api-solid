import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  // metodo valdia se foi passado um token
  await request.jwtVerify()

  console.log(request.user.sub)

  return reply.status(200).send()
}
