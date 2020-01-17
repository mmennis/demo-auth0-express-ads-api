FROM node:12-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait wait
RUN chmod +x /wait

WORKDIR /home/nodejs/app
ENV NODE_ENV test
COPY package*.json ./
RUN npm install && npm install -g mocha
ARG port=80
COPY . ./
CMD /wait && mocha --timeout 1000 test/**/*.js --exit
