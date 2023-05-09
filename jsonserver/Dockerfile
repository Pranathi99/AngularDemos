FROM node
RUN npm install -g json-server
WORKDIR db
COPY db.json .
ENTRYPOINT ["json-server","--watch","db.json"]
