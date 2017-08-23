// Helper functions for geolocation features

// create private folder to hold this content

const localGoogleApiKey = require('../private/apiKeys.js').GOOGLE_API_KEY;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || localGoogleApiKey;
const googleMapsClient = require('@google/maps').createClient({
  key: GOOGLE_API_KEY,
});

exports.googleMapsPromise = address =>
  new Promise((resolve, reject) => {
    googleMapsClient.geocode({
      address },
    (err, response) => {
      if (!err) {
        resolve(response.json.results[0].geometry.location);
      } else {
        reject(err);
      }
    });
  });

// Calculation using Spherical Law of Cosines (see http://www.movable-type.co.uk/scripts/latlong.html)
exports.addDistance = (item, { lat, lng }) => {
  const [itemLat, itemLong] = item.owner.location;
  const φ1 = (lat * Math.PI) / 180;
  const φ2 = (itemLat * Math.PI) / 180;
  const Δλ = ((lng - itemLong) * Math.PI) / 180;
  const R = 6371e3; // Earth's radius in meters
  const distance = Math.acos((Math.sin(φ1) * Math.sin(φ2))
    + (Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ))) * R;
  const updatedItem = Object.assign(item.dataValues, { distance });
  return updatedItem;
};

