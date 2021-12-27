module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b73d0aff9d7aca4425d07e090a228a3'),
  },
});
