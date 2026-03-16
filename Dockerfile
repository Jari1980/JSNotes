#Base image
FROM node:18

#Working directory
WORKDIR /app

#Copy project files
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy <source> <destination>
#Copy everything from current host folder into the current directory inside the container
COPY . .

#API port
EXPOSE 3000

#Start server
CMD ["node", "server.js"]