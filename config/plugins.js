module.exports =  ({ env }) => (
    {
      graphql: {
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: true,
          defaultLimit: 100,
          maxLimit: 1000,
          depthLimit: {
            query: 25,
            mutation: 25,
            depthLimit: 25,
            
          },
          amountLimit: 150,
          apolloServer: {
            tracing: false,
          },
        },
      },
      upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
        },
      },
  
    });
  