FROM node:15.0.1

LABEL project="moeflow-frontend"

COPY . /app
WORKDIR /app

RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn install
RUN yarn run build