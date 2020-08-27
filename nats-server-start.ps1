#docker pull nats
#docker run nats

Set-Location C:\Workspaces\Weaver\nats-server
docker container stop nats
docker container rm nats
docker build -f Docker/Dockerfile.alpine -t nats .
docker run -d -p 127.0.0.1:4222:4222/tcp --name nats -t nats  