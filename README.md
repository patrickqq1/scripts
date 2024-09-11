# Scripts Manager

## Description

This project is a scripts manager that allows you to manage your scripts in a more organized way. It serves as an orchestrator for scripts management.

## Version

1.0.0

## Author

Patrick Enderson

## License

MIT

## Main File

src/app.ts

## Scripts

- `dev`: Run the development server with nodemon
- `start`: Start the production server
- `lint`: Run ESLint on TypeScript files
- `format`: Format code using Prettier
- `build`: Compile TypeScript to JavaScript
- `prisma:migrate`: Run Prisma migrations
- `prisma:studio`: Open Prisma Studio
- `prisma:generate`: Generate Prisma client

## Keywords

- scripts
- manager
- scripts-manager
- orchestrator
- orchestrator-scripts
- orchestrator-scripts-manager

## Dependencies

- @prisma/client: ^5.19.1
- dotenv: ^16.4.5
- fastify: ^4.28.1
- fastify-plugin: ^4.5.1

## Dev Dependencies

- @eslint/js: ^9.10.0
- @types/node: ^22.5.4
- @types/pino: ^7.0.5
- eslint: ^9.10.0
- globals: ^15.9.0
- nodemon: ^3.1.4
- prettier: ^3.3.3
- prisma: ^5.19.1
- ts-node-dev: ^2.0.0
- typescript: ^5.6.2
- typescript-eslint: ^8.5.0

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Set up your environment variables in a `.env` file
4. Run the development server: `npm run dev` or `yarn dev`

## Building for Production

1. Run the build script: `npm run build` or `yarn build`
2. Start the production server: `npm start` or `yarn start`

## Database Management

This project uses Prisma for database management. Use the following commands:

- To run migrations: `npm run prisma:migrate` or `yarn prisma:migrate`
- To open Prisma Studio: `npm run prisma:studio` or `yarn prisma:studio`
- To generate Prisma client: `npm run prisma:generate` or `yarn prisma:generate`

## Contributing

Please ensure to run the linter and formatter before submitting pull requests:

1. `npm run lint` or `yarn lint`
2. `npm run format` or `yarn format`
