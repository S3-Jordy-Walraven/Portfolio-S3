# Docker

## What is Docker?
Docker is a platform that allows you to run applications in a container. A container is a virtual environment that is isolated from the host machine. This means that the container has its own file system, its own network, and its own process tree. This allows you to run multiple containers on the same machine without them interfering with each other.

## How to use Docker?
Docker is quite easy to implement in your own application. For my application I create docker images from github actions. This means that when I push to the master branch of my repository, a docker image is created. This docker image is then pushed to docker hub. This is done by using the following code in my github actions file:

```yaml
  dockerhub:
      name: Dockerhub Build and Push
      runs-on: ubuntu-latest
      if: ${{ github.event_name == 'push' }}
      steps:
        - uses: actions/checkout@v3
  
        - name: Set up QEMU
          uses: docker/setup-qemu-action@v2
        -
          name: Set up Docker Buildx
          uses: docker/setup-buildx-action@v2
        -
          name: Login to Docker Hub
          uses: docker/login-action@v2
          with:
            username: ${{ secrets.DOCKER_USERNAME }}
            password: ${{ secrets.DOCKER_PASSWORD }}
        -
          name: Build and push
          uses: docker/build-push-action@v3
          with:
            context: ./s3-frontend
            push: true
            tags: jordywalraven/signify-app:frontend
```
The tag is the name of the image that is pushed to docker hub. This also specifies to which repository the image is pushed. In this case the image is pushed to the signify-app repository. The image is also tagged with frontend. This is useful when you want to push multiple images to the same repository.

## DockerFile
The dockerfile is a file that contains all the instructions that are needed to build a docker image. This file is used by the docker build command. The dockerfile for my application looks like this:

```dockerfile
FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```
From is node as my image is made from a react application. The workdir is the directory where the application is located. The copy command copies the package.json file to the workdir. The run command installs all the dependencies that are needed for the application. The copy command copies the rest of the application to the workdir. The expose command exposes port 3000. This is the port that the application is running on. The cmd command starts the application.