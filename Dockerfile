# base image
FROM node:13.10.1-alpine as development

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

CMD [ "yarn", "start" ]
