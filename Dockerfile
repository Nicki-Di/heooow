FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma prisma
RUN npx prisma db push
RUN npx prisma generate
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]