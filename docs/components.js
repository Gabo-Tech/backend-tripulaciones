module.exports = {  
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
        },
      },
    schemas: {
      getRoutes: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'Route identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          name: {
            type: 'string',
            description: "Route's name",
            example: 'Arbres monumentals i singulars',
          },
          duration: {
            type: 'number',
            description: 'The duration of the route',
            example: 120,
          },
          difficulty: {
            type: 'string',
            description: 'The difficulty of the route',
            example: 'baja',
          },
          image: {
            type: 'string',
            description: 'The image of the route',
            example: 'https://cultural.valencia.es/wp-content/uploads/2019/01/ficus-valencia-parterre.jpg',
          },
          startinPoint: {
            type: 'string',
            description: 'Where the route starts',
            example: 'Plaza del Ayuntamiento',
          },
          endingPonit: {
            type: 'string',
            description: 'Where the route ends',
            example: 'Jardines de la Glorieta y Parterre',
          },
          description_es: {
            type: 'string',
            description: 'Spanish description',
            example: 'La presencia de Árboles Monumentales y Singulares en la ciudad de València, refleja el espíritu de personas, muchas anónimas, que apostaron para conservar y proteger a unos de los seres vivos más longevos del Planeta, y la capacidad del cual de crecer durante toda su vida nos permite hoy en día sorprendernos con sus dimensiones o por características que nada tienen que ver con las medidas sino con sus rarezas, su forma peculiar, los hechos históricos asociados a ellos o porque son especies únicas. Han recorrido enormes distancias desde rincones lejanos de todo el mundo, para llegar hasta aquí. Dar la vuelta en el mundo en una mañana, a los Jardines del Real (Viveros), es posible gracias a estos árboles.',
          },
          description_va: {
            type: 'string',
            description: 'Valencian description',
            example: 'La presència dArbres Monumentals i Singulars a la ciutat de València, reflecteix lesperit de persones, moltes anònimes, que van apostar per conservar i protegir a uns dels éssers vius més longeus del Planeta, i la capacitat del qual de créixer durant tota la seua vida ens permet hui dia sorprendrens amb les seues dimensions o per característiques que res tenen a veure amb les mesures sinó amb les seues rareses, la seua forma peculiar, els fets històrics associats a ells o perquè són espècies úniques. Han recorregut enormes distàncies des de racons llunyans de tot el món, per a arribar fins ací. Donar la volta al món en un matí, als Jardins del Real (Vivers), és possible gràcies a aquests arbres.',
          },
          description_en: {
            type: 'string',
            description: 'English description',
            example: 'The presence of Monumental and Singular Trees in the city of Valencia, reflects the spirit of people, many anonymous, who bet to preserve and protect some of the longest living beings of the planet, and the ability of which to grow throughout their lives allows us today to be surprised with its dimensions or characteristics that have nothing to do with the measures but with their rarities, their peculiar shape, the historical facts associated with them or because they are unique species. They have traveled enormous distances from distant corners of the world to get here. To go around the world in one morning, to the Jardines del Real (Viveros), is possible thanks to these trees',
          },
          transport: {
            type: 'string',
            description: 'How to do the route',
            example: 'bicicleta',
          },
          type: {
            type: 'string',
            description: 'Type of route',
            example: 'Histórica',
          },
        },
      },
      getRouteById: {
        type: 'object',
        properties: {
          _id:{
            type: 'objectId',
            description: 'Route identification number',
            example: '6201064b0028de7866e2b2c4'
          },
          name: {
            type: 'string',
            description: "Route's name",
            example: 'Arbres monumentals i singulars',
          },
          difficulty: {
            type: 'string',
            description: 'The difficulty of the route',
            example: 'baja',
          },
          duration: {
            type: 'number',
            description: 'The duration of the route',
            example: 120,
          },
          startinPoint: {
            type: 'string',
            description: 'Where the route starts',
            example: 'Plaza del Ayuntamiento',
          },
          endingPonit: {
            type: 'string',
            description: 'Where the route ends',
            example: 'Jardines de la Glorieta y Parterre',
          },
          description_es: {
            type: 'string',
            description: 'Spanish description',
            example: 'La presencia de Árboles Monumentales y Singulares en la ciudad de València, refleja el espíritu de personas, muchas anónimas, que apostaron para conservar y proteger a unos de los seres vivos más longevos del Planeta, y la capacidad del cual de crecer durante toda su vida nos permite hoy en día sorprendernos con sus dimensiones o por características que nada tienen que ver con las medidas sino con sus rarezas, su forma peculiar, los hechos históricos asociados a ellos o porque son especies únicas. Han recorrido enormes distancias desde rincones lejanos de todo el mundo, para llegar hasta aquí. Dar la vuelta en el mundo en una mañana, a los Jardines del Real (Viveros), es posible gracias a estos árboles.',
          },
          description_va: {
            type: 'string',
            description: 'Valencian description',
            example: 'La presència dArbres Monumentals i Singulars a la ciutat de València, reflecteix lesperit de persones, moltes anònimes, que van apostar per conservar i protegir a uns dels éssers vius més longeus del Planeta, i la capacitat del qual de créixer durant tota la seua vida ens permet hui dia sorprendrens amb les seues dimensions o per característiques que res tenen a veure amb les mesures sinó amb les seues rareses, la seua forma peculiar, els fets històrics associats a ells o perquè són espècies úniques. Han recorregut enormes distàncies des de racons llunyans de tot el món, per a arribar fins ací. Donar la volta al món en un matí, als Jardins del Real (Vivers), és possible gràcies a aquests arbres.',
          },
          description_en: {
            type: 'string',
            description: 'English description',
            example: 'The presence of Monumental and Singular Trees in the city of Valencia, reflects the spirit of people, many anonymous, who bet to preserve and protect some of the longest living beings of the planet, and the ability of which to grow throughout their lives allows us today to be surprised with its dimensions or characteristics that have nothing to do with the measures but with their rarities, their peculiar shape, the historical facts associated with them or because they are unique species. They have traveled enormous distances from distant corners of the world to get here. To go around the world in one morning, to the Jardines del Real (Viveros), is possible thanks to these trees',
          },
          transport: {
            type: 'string',
            description: 'How to do the route',
            example: 'bicicleta',
          },
          type: {
            type: 'string',
            description: 'Type of route',
            example: 'Histórica',
          },
        }
      },
      likeRoute: {
        type: 'object',
        properties: {
          _id:{
            type: 'objectId',
            description: 'Route identification number',
            example: '6201064b0028de7866e2b2c4'
          },
          name: {
            type: 'string',
            description: "Route's name",
            example: 'Arbres monumentals i singulars',
          },
          difficulty: {
            type: 'string',
            description: 'The difficulty of the route',
            example: 'baja',
          },
          duration: {
            type: 'number',
            description: 'The duration of the route',
            example: 120,
          },
          startinPoint: {
            type: 'string',
            description: 'Where the route starts',
            example: 'Plaza del Ayuntamiento',
          },
          endingPonit: {
            type: 'string',
            description: 'Where the route ends',
            example: 'Jardines de la Glorieta y Parterre',
          },
          description_es: {
            type: 'string',
            description: 'Spanish description',
            example: 'La presencia de Árboles Monumentales y Singulares en la ciudad de València, refleja el espíritu de personas, muchas anónimas, que apostaron para conservar y proteger a unos de los seres vivos más longevos del Planeta, y la capacidad del cual de crecer durante toda su vida nos permite hoy en día sorprendernos con sus dimensiones o por características que nada tienen que ver con las medidas sino con sus rarezas, su forma peculiar, los hechos históricos asociados a ellos o porque son especies únicas. Han recorrido enormes distancias desde rincones lejanos de todo el mundo, para llegar hasta aquí. Dar la vuelta en el mundo en una mañana, a los Jardines del Real (Viveros), es posible gracias a estos árboles.',
          },
          description_va: {
            type: 'string',
            description: 'Valencian description',
            example: 'La presència dArbres Monumentals i Singulars a la ciutat de València, reflecteix lesperit de persones, moltes anònimes, que van apostar per conservar i protegir a uns dels éssers vius més longeus del Planeta, i la capacitat del qual de créixer durant tota la seua vida ens permet hui dia sorprendrens amb les seues dimensions o per característiques que res tenen a veure amb les mesures sinó amb les seues rareses, la seua forma peculiar, els fets històrics associats a ells o perquè són espècies úniques. Han recorregut enormes distàncies des de racons llunyans de tot el món, per a arribar fins ací. Donar la volta al món en un matí, als Jardins del Real (Vivers), és possible gràcies a aquests arbres.',
          },
          description_en: {
            type: 'string',
            description: 'English description',
            example: 'The presence of Monumental and Singular Trees in the city of Valencia, reflects the spirit of people, many anonymous, who bet to preserve and protect some of the longest living beings of the planet, and the ability of which to grow throughout their lives allows us today to be surprised with its dimensions or characteristics that have nothing to do with the measures but with their rarities, their peculiar shape, the historical facts associated with them or because they are unique species. They have traveled enormous distances from distant corners of the world to get here. To go around the world in one morning, to the Jardines del Real (Viveros), is possible thanks to these trees',
          },
          transport: {
            type: 'string',
            description: 'How to do the route',
            example: 'bicicleta',
          },
          type: {
            type: 'string',
            description: 'Type of route',
            example: 'Histórica',
          },
          likes: {
            type:['objectId'],
            description:'Likes of a route',
            example: ['62f60d8dfc6a9bdd26d5f3f5']
        }
        }
      }
    },
  },
}