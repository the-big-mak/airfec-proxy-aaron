module.exports = {
  bundles: {
    photos(req, res) {
      res.redirect(`http://localhost:3003/rooms/${req.params.id}/bundlePhotos.js`);
    },
    description(req, res) {
      res.redirect(`http://localhost:3002/rooms/${req.params.id}/dist/overview.js`);
    },
    reviews(req, res) {
      res.redirect(`http://ec2-54-173-131-192.compute-1.amazonaws.com/rooms/${req.params.id}/reviewBundle.js`);
    },
    reservations(req, res) {
      res.redirect(`http://ec2-18-208-163-155.compute-1.amazonaws.com/rooms/${req.params.id}/bundleReservations.js`);
    },
  },
  data: {
    photos(req, res) {
      res.redirect(`http://localhost:3003/Photos/${req.params.id}`);
    },
    description(req, res) {
      res.redirect(`http://localhost:3002/description?id=${req.query.id}`);
    },
    reviews(req, res) {
      res.redirect(`http://ec2-54-173-131-192.compute-1.amazonaws.com/reviews/${req.params.id}`);
    },
    reservations(req, res) {
      res.redirect(`http://ec2-18-208-163-155.compute-1.amazonaws.com/reservations/${req.params.id}`);
    },
  },
};
