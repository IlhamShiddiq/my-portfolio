FROM node:14.17.6-stretch-slim as builder
WORKDIR /app
COPY . .
RUN npm i yarn
RUN yarn install
RUN yarn build

FROM nothinux/go-httpserver:latest
COPY --from=builder /app/dist /static
EXPOSE 8080