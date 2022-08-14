module.exports = {
  paths: {
    "/users": {      
      get: {
        tags: {
          Users: " Get all users",
        },
        description: "Get all registered users in the database",
        operationId: "getAllUsers",
        parameters: [],
        responses: {
          201: {
            description: "Users were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/getAllUsers",
                },
              },
            },
          },
          500: { description: "Server Error" },
        },
      },
      post: {
        tags: {
          Users: " User register",
        },
        description:" Create a new user",
        operationId: "createUsers",
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/userCreate",
              },
            },            
          },
        },
        responses: {
          200: { description: "User created succesfully" },
          500: { description: "Server error" },
        },
      },
      delete: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
        tags: {
          Users: " Delete user",
        },
        description: "Delete an user",
        operationId: "deleteUser",
        parameters: [],
        responses: {
          200: { description: "User deleted succesfully" },
          404: { description: "User not found" },
          500: { description: "Server error" },
        },
      },
      put: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
        tags: {
          Users: " Update user",
        },
        description: "Update user profile",
        operationId: "updateUser",
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/userUpdate",
              },
            },            
          },
        },
        responses: {
          200: { description: "User updated succesfully" },
          404: { description: "User not found" },
          500: { description: "Server error" },
        },
      },
    },
    "/users/login": {
      post: {
        tags: {
          Users: " User login",
        },
        description: "Connect the user",
        operationId: "loginUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/userLogin",
              },
            },
          },
        },
        responses: {
          201: { description: "User connected successfully" },
          404: { description: "User not found" },
          500: { description: "Server error" },
        },
      },
    },
    "/users/logout": {
      delete: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
        tags: {
          Users: " User logout",
        },
        description: "Disconnect the user",
        operationId: "deleteUser",
        parameters: [],
        responses: {
          200: { description: "User logged out successfully" },
          404: { description: "User not found" },
          500: { description: "Server error" },
        },
      },
    },
    '/routes/getAlldb': {
      get: {
        tags: {
          Routes : ' Get all routes',
        },
        description: 'Get routes',
        operationId: 'getRoutes',
        parameters: [],
        responses: {
          201: {
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
          201: {
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
          201: { 
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
    '/routes/dislike/{_id}': {
      put: {
        security: [
          {
            ApiKeyAuth: [],
          }
        ],
        tags: {
          Routes : ' Dislike route',
        },
        description: 'Dislike a route',
        operationId: 'dislikeRoute',
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
          201: { 
            description: "The route has been disliked" ,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/dislikeRoute',
                },
              },
            },
          },
          404: { description: "Route not found" },
          500: { description: "Server error" },
        },
      }
    },
    '/routes/search/{name}': {
      get: {
        tags: {
          Routes : ' Search by name',
        },
        description: 'Search route by name',
        operationId: 'getRoutesByName',
        parameters: [
          {
            in: "path",
            name: "name",
            schema: {
              type: "objectId",
            },
          },
        ],
        responses: {
          201: {
            description: 'Route were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/getByName',
                },
              },
            },
          },
        },
      },
    },
    '/comments/': {
      get: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
        tags: {
          Comments: ' Get all comments',
        },
        description: 'Get comments',
        operationId: 'getComments',
        parameters: [],
        responses: {
          201: {
            description: 'Comments were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/getComments',
                },
              },
            },
          },
        },
      },
    },
    '/comments/': {
      post: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
        tags: {
          Comments: ' Create a comment',
        },
        description: "Create a new comment on a route",
        operationId: "createComments",
        parameters: [
          {
            in: 'body',
            name: 'comment',
            schema: {
              $ref: "#/components/schemas/commentCreate"
            },
          },
          
        ],        
        responses: {
          201: { description: "Comment created successfully" },
          500: { description: "Server error" },
        },
      },
    },
    '/comments/id/{commentId}': {
      put: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
        tags: {
          Comments: " Update comment",
        },
        description: "Edit a comment",
        operationId: "updateComment",
        parameters: [
          {
            in: "path",
            name: "commentId",
            schema: {
              type: "objectId",
            },
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                $ref: "#/components/schemas/commentUpdate",
              },
            }            
          },
        },
        responses: {
          201: { description: "Comment updated successfully" },
          404: { description: "Comment not found" },
          500: { description: "Server Error" },
        },
      },
    },
    '/comments/comment/{id}': {
      delete: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
        tags: {
          Comments: ' Delete comment',
        },
        description: 'Delete a comment',
        operationId: 'deleteComment',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'objectId',
            },
          },
        ],
        responses: {
          201: { description: 'Comment deleted succesfully' },
          404: { description: 'Comment not found' },
          500: { description: 'Server Error' },
        },
      },
    },
  },
};