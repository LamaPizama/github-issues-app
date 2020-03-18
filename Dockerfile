# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]


# # base image
# FROM node:13.10.1-alpine

# # set working directory
# WORKDIR /app

# # install and cache app dependencies
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json yarn.lock /app/
# RUN yarn install

# # start app
# CMD [ "yarn", "start" ]
