FROM node:11
WORKDIR /usr/src/app
COPY . .
RUN npm i
RUN npm uninstall bcrypt
RUN npm i bcrypt
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["node", "./server/server.js"]