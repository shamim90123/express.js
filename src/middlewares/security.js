const helmet = require('helmet');
const cors = require('cors');

exports.applySecurityMiddleware = (app) => {
  app.use(helmet());
  app.use(cors());
};
