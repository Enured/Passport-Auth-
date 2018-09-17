const router					 = require('express').Router()
const User						 = require('../models/User')
const passport         = require('passport')

router.get('/signup', (req, res) => {
	res.render('auth/signup')
})

router.post('/signup', (req, res, next) => {
	User.register(req.body, req.body.password)
	.then(user => res.redirect('auth/login'))
	.catch(error => next(error))
})

router.get('/login', (req, res) => {
	res.render('auth/login')
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
	res.send('Success')
})

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook'), (req, res) => {
	res.send('Succes Facebook')
})

module.exports = router
