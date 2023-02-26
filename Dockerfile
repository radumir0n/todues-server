FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD npm run dev