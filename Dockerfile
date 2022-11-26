FROM ubuntu:22.04

LABEL creator="innocent"

RUN curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
apt install -y nodejs

COPY . /app

WORKDIR /app

RUN npm install

ENV port=5000

EXPOSE ${port}

ENTRYPOINT ["node", "server.js"]