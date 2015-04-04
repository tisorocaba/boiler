module.exports = {
	'*page404' : [require('controllers/application').page404, '404 - Boiler'],
	''         : [require('controllers/application').home, 'Home - Boiler']
};