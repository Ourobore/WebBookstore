FROM node:14-alpine as development

WORKDIR /home/lchapren/WebBookstore/backend

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/lchapren/WebBookstore/backend

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /home/lchapren/WebBookstore/backend/dist ./dist

CMD ["node", "dist/main"]