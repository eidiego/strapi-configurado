module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d6a584dba68aa5e07ac7285d49c3e0f'),
  },
});
