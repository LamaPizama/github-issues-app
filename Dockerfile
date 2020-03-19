# base image
FROM node:13.10.1-alpine as development

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

CMD ["yarn", "start"]

# production environment
FROM node:13.10.1-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN ["yarn", "build"]

# production environment
FROM nginx:1.17.3-alpine as production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
