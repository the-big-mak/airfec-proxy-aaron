const controller = require('./controller');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'))
  .use('/rooms/:id', express.static(path.join(__dirname, '../public')))
  .get('/photos/app/:id', controller.bundles.photos)
  .get('/description/app/:id', controller.bundles.description)
  .get('/reviews/app/:id', controller.bundles.reviews)
  .get('/reservations/app/:id', controller.bundles.reservations)
  .get('/photos/:id', controller.data.photos)
  .get('/description', controller.data.description)
  .get('/reviews/:id', controller.data.reviews)
  .get('/reservations/:id', controller.data.reservations)
  .listen(port, () => console.log(`server running at: http://localhost:${port}`));
  