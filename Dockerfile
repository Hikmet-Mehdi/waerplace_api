FROM node:18-alpine

WORKDIR /usr/src/app


COPY package.json /usr/src/app
COPY tsconfig.build.json /usr/src/app
COPY tsconfig.json /usr/src/app
COPY nest-cli.json /usr/src/app
RUN yarn

COPY prisma /usr/src/app
COPY src /usr/src/app
COPY libs /usr/src/app

RUN yarn global add  prisma@5
RUN yarn prisma generate



CMD ["yarn", "start:dev"]