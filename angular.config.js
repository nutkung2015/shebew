module.exports = {
  cli: {
    analytics: false
  },
  devServer: {
    allowedHosts: [
      'localhost',
      '.ngrok-free.app'
    ],
    disableHostCheck: true,
    host: '0.0.0.0',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};
