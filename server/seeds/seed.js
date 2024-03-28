const db = require('../config/connection');

db.once('open', async () => {


  console.log('Technologies seeded!');
  process.exit(0);
});
