'use strict';

/**
 * Module dependencies.
 */


module.exports = db;

db.close = async () => {
    await db.mongoose.close()
  };