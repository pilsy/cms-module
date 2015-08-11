export default function(Model, utils) {

  return Model.extend('Page',
  {
    type           : 'ORM',
    timeStampable  : true,
    softDeleteable : false,

    'SiteModel beforeAllFindersOptions': function(findOptions, queryOptions, callback) {
      utils.helpers
        .includeModel(findOptions, this, 'Pages');

      callback(null, findOptions);
    }
  },
  {
    id: {
      type          : Number,
      primaryKey    : true,
      autoIncrement : true
    },
    title: {
      type          : String,
      required      : true
    },
    name: {
      type          : String,
      required      : true
    },
    content: {
      type          : Model.Types.TEXT,
      required      : true
    },
    active: {
      type          : Boolean,
      default       : false
    }
  });

};

// 'title'
// 'name'
// 'active'
// 'membersonly'
// 'sitemap'
// 'menu'
// 'content'
// 'form'
// 'gallery'
// 'seo_title'
// 'seo_description'
// 'seo_keywords'
// 'seo_block'
// 'submittext'
// 'alterrowbg'
// 'breakonradio'
// 'emailto'
// 'subject'
// 'page_id'
