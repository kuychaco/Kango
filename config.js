var config = {
  development: {
    server: {
      port: 3000,
    },
    // database: {
    //   url: 'mongodb://localhost/greenfield_dev'
    // }
  },
  testing: {
    server: {
      port: 3001
    },
    // database: {
    //   url: 'mongodb://localhost/greenfield_test'
    // }
  },
  production: {
    server: {
      port: 8080
    },
    // database: {
    //   url: 'mongodb://localhost/greenfield'
    // }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
