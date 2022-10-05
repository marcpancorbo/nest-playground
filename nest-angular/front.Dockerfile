FROM node:14.15.0
WORKDIR /app
COPY package.json ./

RUN npm install

COPY . .
EXPOSE 4200

CMD npm run docker