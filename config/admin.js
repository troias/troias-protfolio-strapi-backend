module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '52805caea5df3d99402d3fb5bcb33da8'),
  },
});
