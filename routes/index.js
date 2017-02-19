var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/challenge', function(req, res, next) {
  console.log('in challenge');
  var json = JSON.parse(challengeJSON);
  res.json(json);
});

router.get('/user', function(req, res, next) {
  console.log('in user');
  var json = JSON.parse(userJSON);
  res.json(json);
});

module.exports = router;


var challengeJSON = '{	"id": "686x565asdf87657657xwe868q7we89"	"title": "Arrowhead Trail",	"description": "Great view. Waterfall at the top with some pools.",	"locations": [		{			"longitude": 111.123456,			"latitude": 78.123456,			"title": "Welcome!",			"content": {				"text": "It\'s time to begin your journey"				"image": blob				"video": url/blob			},			"lockType": "auto"		}	],	"owner": {		"id": "0a9ds7a767ac7vr5as4de4465464646",		"displayName": "Tina Turner"	},	"completedBy": [		{			"id": "1s12fa1243g3kok6800llpmc1q76",			"user": "Billy Bob",			"message": "Text"		}	],	"created": "Mon Feb 06 2017 00:45:48 GMT-0700 (MST)",	';
var userJSON = '{	"id": "0a9ds7a767ac7vr5as4de4465464646"	"firstName": "Tina",	"lastName": "Turner",	"displayName": "Tina Turner",	"email": "tina@singer.com",	"birthday": "Aug 20, 1998",	"interestedChallenges": [		"d53h338383hjsjbs623yjb923u2h2939",		"9a7a5d5d7v8a7hwh11199dhsdjb2387y"	],	"completedChallenges": [		"6a6a5a55sdfh12j3jb1423123412jhkjs"	],	"created": "Mon Feb 06 2017 00:45:48 GMT-0700 (MST)"}';
