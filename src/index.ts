import { fastify } from 'fastify'
import { devLogger, env, PORT } from './config'
import routes from './routes/index.routes'

const server = fastify({
  logger: devLogger[env as keyof typeof devLogger],
})

routes(server)

const start = async () => {
  try {
    await server.listen({ port: PORT })
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

export default start
