# API REST STARTER KIT
## UNIT TEST CI DOCKER

### Init

- Copy `env.json.exemple` as `env.json` and fill with your information before starting the api

- run prod server
```bash
    npm start
```
- run dev server
```bash
    npm run dev
```
- run test
```bash
    npm run test
```

### Launch

- Install Docker (https://www.docker.com)
- Build the node container
```bash
    docker build -t <username>/<container-name> .
```
- Run the container
```bash
    docker run -p <local-port>:3000 -d <username>/<container-name>
```

- Test the app
```bash
    curl 127.0.0.1:<local-port>
```


