FROM node:14.10.0-stretch
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3001
CMD ["npm", "run", "start:dev"]
