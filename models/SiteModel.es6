export default function(Model, utils) {

  return Model.extend('Site',
  {
    type           : 'ORM',
    timeStampable  : true,
    softDeleteable : false,

    'PageModel beforeAllFindersOptions': function(findOptions, queryOptions, callback) {
      utils.helpers
        .includeModel(findOptions, this, 'Site');

      callback(null, findOptions);
    }
  },
  {
    id: {
      type          : Number,
      primaryKey    : true,
      autoIncrement : true
    },
    url: {
      type          : String,
      required      : true
    },
    name: {
      type          : String,
      required      : true
    },
    active: {
      type          : Boolean,
      default       : false
    }
  });

};
