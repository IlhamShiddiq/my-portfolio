FROM node:latest
WORKDIR /app
COPY . .
RUN npm i
RUN npm i ajv@latest
RUN npm i -g http-server
RUN npm run build

CMD ["http-server", "./dist", "-p 8080"]
