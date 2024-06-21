// plugins/withCustomAndroidManifest.js
const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withCustomAndroidManifest(config) {
  return withAndroidManifest(config, async config => {
    const androidManifest = config.modResults.manifest;

    if (androidManifest) {
      const application = androidManifest.application[0];

      // Добавляем namespace для tools, если его еще нет
      if (!androidManifest.$ || !androidManifest.$['xmlns:tools']) {
        androidManifest.$ = {
          ...androidManifest.$,
          'xmlns:tools': 'http://schemas.android.com/tools',
        };
      }

      // Найдите и измените нужный meta-data
      if (application['meta-data']) {
        application['meta-data'] = application['meta-data'].map(metaData => {
          if (metaData['$']['android:name'] === 'com.google.firebase.messaging.default_notification_color') {
            return {
              ...metaData,
              $: {
                ...metaData.$,
                'tools:replace': 'android:resource',
              },
            };
          }
          return metaData;
        });
      }
    }

    return config;
  });
};
