const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');
const config = require('../../package.json');
const _ = require('lodash');

let rootPath = '../../'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: config.name,
      version: config.version,
    },
  },
  apis: config.openApiDocPatterns, // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

let openApiPath = 'openapi';

if (!fs.existsSync(openApiPath)) {
  fs.mkdirSync(openApiPath);
}

let docs = JSON.stringify(openapiSpecification, null, 2);

fs.writeFileSync(openApiPath + "/openapi.json", docs);
