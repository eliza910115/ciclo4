FROM node:latest

WORKDIR /app

COPY . .

RUN yarn install --production

CMD ["npm", "start"]