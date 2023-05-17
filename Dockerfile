# base image
FROM node:18

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN npm install --silent
RUN npm install -g @vue/cli@latest

# add app
COPY . .

# start app
CMD ["npm", "run", "serve"]
