import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(appRoutes)

// Criando uma tratativa de erro global
app.setErrorHandler((error, _, replay) => {
  if (error instanceof ZodError) {
    return replay
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TOTO: jogar para uma ferramenta de obsservabilidade como: DataDog/NewRelic/Sentry
  }

  return replay.status(500).send({ message: 'Internal server error' })
})
