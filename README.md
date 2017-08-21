
[![Stories in Ready](https://badge.waffle.io/nightowlsnode/nightowlsnode.png?label=ready&title=Ready)](https://waffle.io/nightowlsnode/nightowlsnode?utm_source=badge)

# ShareIn
![alt text](public/assets/homepage.png)

ShareIn is a social application and marketplace allowing neighbors to easily share and borrow items from one another. Users can list items that are available for borrowing, search for items in their neighborhoods, and contact the owners of those items via SMS messaging.

<img src="public/assets/profile.png" width=49%/>
<img src="public/assets/results.png" width=49%/>

# Required Files

###Private folder on root directory containing: 

####apiKeys.js with variables named: 
- `sid` (from twilio),
- `authorizationCode` (twilio),
- `twilioNumber`,
- `GOOGLE_API_KEY` (google maps geo coding api)

#### dbconfig.js containig variables named:
- `databaseOptions` = { dialect: 'postgres', logging: false, pool: {max: 5,min: 0,idle: 10000,}}
- `databaseUrl` = given by postgreSQL host
