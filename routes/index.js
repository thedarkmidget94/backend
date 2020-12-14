const router = require('express').Router();
const apiRouterUser = require('./api/users');

router.use('/user', apiRouterUser);

module.exports = router;

