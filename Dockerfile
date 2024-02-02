FROM node:18-alpine3.19

WORKDIR /home/app

COPY . ./

RUN npm i 

EXPOSE 3333

CMD ["npm", "run", "dev"]