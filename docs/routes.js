module.exports = {
  paths: {
    '/routes/getAlldb': {
      get: {
        tags: {
          Routes : ' Get all routes',
        },
        description: 'Get routes',
        operationId: 'getRoutes',
        parameters: [],
        responses: {
          200: {
            description: 'Routes were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/getRoutes',
                },
              },
            },
          },
        },
      },
    },
    '/routes/getByIddb/{_id}': {
      get: {
        security: [
          {
            ApiKeyAuth:[],
          },
        ],
        tags: {
          Routes : ' Get route by Id',
        },
        description: 'Get routes by Id',
        operationId: 'getRoutesById',
        parameters: [
          {
            in: "path",
            name: "_id",
            schema: {
              type: "objectId",
            },
          },
        ],
        responses: {
          200: {
            description: 'Route were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/getRouteById',
                },
              },
            },
          },
          500: { description: "Server error" },
        },
      },
    },
    '/routes/likes/{_id}': {
      put: {
        security: [
          {
            ApiKeyAuth: [],
          }
        ],
        tags: {
          Routes : ' Like route',
        },
        description: 'Like a route',
        operationId: 'likeRoute',
        parameters: [
          {
            in: "path",
            name: "_id",
            schema: {
              type: "objectId",
            },
          },
        ],
        responses: {
          200: { 
            description: "The route has been liked" ,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/likeRoute',
                },
              },
            },
          },
          404: { description: "Route not found" },
          500: { description: "Server error" },
        },
      }
    },
  },
};