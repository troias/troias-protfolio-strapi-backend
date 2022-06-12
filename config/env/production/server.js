module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    admin: {
        auth: {
            secret: env('JWT_SECRET'),
        }
    }, 
    app: {
      keys:  env.array('APP_KEYS') 
    }
    
  });