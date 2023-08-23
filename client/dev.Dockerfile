FROM node:18.14.2-alpine3.17
WORKDIR /app
COPY /package*.json /app/
RUN npm install
COPY . /app