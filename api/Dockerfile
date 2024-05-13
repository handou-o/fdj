FROM node:18-alpine3.18

EXPOSE 3000
WORKDIR /var/www/server
COPY ./api /var/www/server

RUN npm install -g @nestjs/cli
RUN npm install