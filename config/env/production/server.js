module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    secret: env('ADMIN_JWT_SECRET'),
  
    app: {
      keys:  env.array('APP_KEYS') 
    }
    
  });