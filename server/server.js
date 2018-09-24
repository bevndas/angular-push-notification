const  express = require('express');
const webpush= require('web-push');

const cors= require('cors');
const  bodyParser = require('body-parser');

const PUBLIC_VAPID = 'BOg35W3-4zg--Ni5Y9wobgRf7MM7hnCU5XQFuX11CQO-L4hYH5E8zwh-EYfSLJZO4r9Oi99rvTOXwihS6_UQHtc';
const PRIVATE_VAPID = 'MLTTrScrevorGo-AUDYLUVgGf0IowbzOiwhj8VFIQ6s';

const app = express();

const psuedoDatabase  = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/subscription', (req, res) => {
	const subscription = req.body;
	psuedoDatabase.push(subscription);
	res.send('successfully  added');
});

app.post('/sendNotification', (req,res) => {
	const notificationPayload = {
		notification:{
			title: 'Offer Notice',
			body: 'Special discount  on the  new clothing line this  festive seasons. Book your order!',
			icon: 'assets/icons/icon-512x512.png'			
			}
	};

	const promises =  [];
	psuedoDatabase.forEach(subscription => {
		promises.push(webpush.sendNotification(subscription, JSON.stringify(notificationPayload)))	
	});
Promise.all(promises).then(() => res.sendStatus(200));
});

webpush.setVapidDetails('mailto:you@domain.com', PUBLIC_VAPID, PRIVATE_VAPID);

app.listen(3000, () => {
console.log('Server started on  port 3000');
});
