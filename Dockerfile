FROM node:14.17.5
WORKDIR /app
COPY . .
RUN npm i
RUN npm i -g http-server
RUN npm run build

CMD ["http-server", "./dist", "-p 8080"]
