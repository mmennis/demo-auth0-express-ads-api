FROM node:12-alpine

WORKDIR /home/nodejs/app
ENV NODE_ENV test
COPY package*.json ./
RUN npm install && npm install -g mocha
ARG port=80
COPY . ./
CMD mocha --timeout 1000 test/**/*.js --exit
