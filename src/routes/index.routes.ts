import { FastifyInstance } from 'fastify'

export default async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    try {
      throw new Error('Hello World')
    } catch (error) {
      fastify.log.error(error)
      reply.status(500).send({ message: 'Internal server error' })
    }
  })
}
