FROM node:16-alpine

WORKDIR /home/lchapren/WebBookstore/backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run start:dev

# FROM node:16-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /home/lchapren/WebBookstore/backend

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /home/lchapren/WebBookstore/backend/dist ./dist

# CMD ["node", "dist/main"]