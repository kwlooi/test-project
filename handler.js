'use strict';

// GET handler with query string parameters
module.exports.hello = async (event, context) => {
  console.log(event);

  var message = 'Hello World!';
  const name = event.queryStringParameters && event.queryStringParameters.name;
  if (name !== null) {
    message = 'Hello ' + name + '!';
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

// GET handler with path parameters
module.exports.hola = async (event, context) => {
  console.log(event);

  var message = 'Hola!';
  const name = event.pathParameters && event.pathParameters.name;
  const id = event.pathParameters && event.pathParameters.id;
  if (typeof(name) != 'undefined' && name !== null) {
    message = 'Hola ' + name + '!';
    if (typeof(id) != 'undefined' && id !== null) {
      message = message + ' ' + id;
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };
};

// POST handler
module.exports.aloha = async (event, context) => {
  console.log(event);

  const body = JSON.parse(event.body);

  var message = 'Aloha!';

  const name = body.name;
  if (typeof(name) != 'undefined' && name !== null) {
    message = 'Aloha ' + name + '!';
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      body: body,
      input: event,
    }),
  };
};

