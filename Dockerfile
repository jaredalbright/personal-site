FROM node:current-alpine3.18 as BUILD_IMAGE

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html
COPY --from=BUILD_IMAGE /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]