import dotenv from 'dotenv'

dotenv.config()

const PORT = parseInt(process.env.PORT || '3000')

const env = process.env.NODE_ENV || 'development'

const devLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: true,
        ignore: 'pid,hostname',
        levelFirst: true,
        messageFormat: '{msg}',
      },
    },
  },
  production: {
    level: 'info',
  },
  test: {
    level: 'silent',
  },
}

export { PORT, devLogger, env }
