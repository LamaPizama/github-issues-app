# Github Issues App

Github issues application reproduced "pixel perfect way"

<p align='center'>
    <img src='https://i.ibb.co/6nMfM3t/Zrzut-ekranu-2020-03-19-o-00-10-45.png' width='600' />
</p>

**Requirements**:
- [x] Template needs to have all essential elements like: sidebar, navigation with filters, main frame with issues list, OSX buttons
- [x] Filter buttons in navigation should have hover and active state
- [x] The star in single issue bar needs to be clikable and change it’s state after click (as it is in design)

## Technologies

- styled-components
- styled-components-modifiers

## Docker
This application fully supports docker development with hot-reloading and production build with nginx

### Devlopment
To develop application you can use:

- **Dockerfile**
- **docker-compose.yml**

#### Dockerfile
To start developing using Dockerfile build and tag the Docker image:
```bash
$ docker build -t github-issues-app:dev .
```

Then, spin up the container once the build is done:
```bash
$ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true --rm github-issues-app:dev
```

Now application should be running on localhost:3001

#### docker-compose.yml
Want to use docker-compose? Build image and fire up the container
```bash
$ docker-compose up -d --build
```

Now application should be running on localhost:3001

### Production
To start production build run:
```bash
$ docker build --target production -t github-issues-app:prod .
```

Then, spin up the container once the build is done:
```bash
$ docker run -p 80:80 github-issues-app:prod
```

Now application should be running on localhost
