module.exports = {
  paths: {
    '/routes/getAlldb': {
      get: {
        tags: {
          Routes : ' Get Routes',
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
                  $ref: '#/components/schemas/getRoute',
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
          Routes : ' Get Routes by Id',
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
  },
};