const config = {};
config.databaseUrl = 'postgres://wpnhzsgl:GN8GElvtimdPJhhXpvgF5Aw-RoAJbTTa@pellefant.db.elephantsql.com:5432/wpnhzsgl';
config.databaseOptions = {
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};

module.exports = config;
