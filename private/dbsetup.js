const User = require('../db/models/users');
const Item = require('../db/models/items');
const test = require('./testData');

// User.hasMany(Item, { foreignKey: 'borrower_id' });
// User.hasMany(Item, { foreignKey: 'owner_id' });
// Item.belongsTo(User, { as: 'borrowedItems', foreignKey: 'borrower_id' });
// Item.belongsTo(User, { as: 'ownedItems', foreignKey: 'owner_id' });

Item.sync({ force: true })
  .then(() => User.sync({ force: true }))
  .then(() => Item.bulkCreate(test.items))
  .then(() => User.bulkCreate(test.users))
  .then(msg => console.log(msg));
