cd C:\Workspaces\Weaver
docker container stop user-mongo
docker container rm user-mongo
docker pull mongo
docker run --rm -it -p 127.0.0.1:27017:27017/tcp --name user-mongo -t mongo mongod --replSet rs0