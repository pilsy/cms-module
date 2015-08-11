module.exports = {
  s3: {
    options: {
      key         : config.awsKey,
      secret      : config.awsSecret,
      bucket      : config.bucketLocation,
      access      : 'public-read'
    },
    somewebsite: {
      upload: [
        
      ]
    }
  }
}
