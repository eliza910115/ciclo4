FROM node:12-alpine

WORKDIR /app

COPY . .

RUN yarn install --production

EXPOSE 4024

CMD ["node", "/app/index.js"]