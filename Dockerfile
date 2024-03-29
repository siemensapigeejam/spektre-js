FROM node:10

WORKDIR /usr/src/app

RUN npm install express

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]