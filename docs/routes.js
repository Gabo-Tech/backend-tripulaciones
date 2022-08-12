module.exports = {
  paths: {
    '/routes': {
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
                  $ref: '#/components/schemas/route',
                },
              },
            },
          },
        },
      },
    },
  },
};