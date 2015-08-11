export default function(Model) {

  return Model.extend('Site',
  {
    type           : 'ORM',
    timeStampable  : true,
    softDeleteable : false
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
    title: {
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
