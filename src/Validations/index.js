const Joi = require('joi');

const paginationOptions = {
  query : Joi.object().keys({
    page :    Joi.number().min(1),
    limit :   Joi.number().min(1),
    keyWord : Joi.string().regex(/^[a-zA-Z2-9\s]*$/).trim().min(3).max(30),
  }),
};


module.exports = {
    userValidator :  require('./user'),
    paginationOptions
};
  