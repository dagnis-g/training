const notFound = (req, res) => res.status(404).send('Route neeksistē');
module.exports = notFound;
