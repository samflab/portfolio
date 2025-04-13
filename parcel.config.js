module.exports = {
    extends: '@parcel/config-default',
    transformers: {
      '*.{png,jpg,jpeg,gif,svg}': ['@parcel/transformer-image'], // Ensure image files are transformed
    },
    resolvers: {
        // Ensure static files in public/ are served
        'static-files': ['@parcel/resolver-default', "@parcel/resolver-glob"],
      },
  };
  