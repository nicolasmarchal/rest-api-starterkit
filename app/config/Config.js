const envFile = require('../../env.json');

exports.getEnv = () => {
  let env = process.env.NODE_ENV;
  if (!env) {
    env = 'production'
  }

  if (!envFile) {
    throw Error('You must implement env.json !');
  }
  if (!envFile[env]) {
    throw Error(`You must implement a configuration for ${env} in env.json`)
  }
  const serverHost = envFile[env].server.address;
  const serverPort = envFile[env].server.port;
  const dbUrl = `mongodb://${envFile[env].database.host}:${envFile[env].database.port}/${envFile[env].database.db}`;
  return {
    server: {
      host: serverHost,
      port: serverPort,
    },
    db: {
      url: dbUrl,
    },
    jwt: {
      secret: 'secret string for JWT',
    },
  };
};
