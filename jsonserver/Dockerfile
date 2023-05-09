FROM nginx
RUN npm install -g json-server
WORKDIR db
COPY db.json .
ENTRYPOINT ["json-erver","--watch","db.json"]
