# Github Issues App

Github issues application reproduced "pixel perfect way"

<p align='center'>
    <img src='https://i.ibb.co/6nMfM3t/Zrzut-ekranu-2020-03-19-o-00-10-45.png' width='600' />
</p>

**Requirements**:
- [x] Template needs to have all essential elements like: sidebar, navigation with filters, main frame with issues list, OSX buttons
- [x] Filter buttons in navigation should have hover and active state
- [x] The star in single issue bar needs to be clikable and change it’s state after click (as it is in design)


## Docker
---
To run application using Docker 

- **Using Dockerfile**
- **Using docker-compose.yml**

Build and tag the Docker image:
```bash
$ docker build -t github-issues-app:dev .
```
Then, spin up the container once the build is done:
```bash
$ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm github-issues-app:dev
```

Want to use docker-compose? Build image and fire up the container
```bash
$ docker-compose up -d --build
```
