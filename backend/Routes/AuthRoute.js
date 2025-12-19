const { Signup, Login, userVerification } = require('../Controllers/AuthController');
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.get('/verify-user', userVerification);

module.exports = router;
