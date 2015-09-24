Package.describe({
  // name: 'jscottsf:meteor-woopra',
  summary: 'Woopra tracking for Meteor',
  version: '0.1.0',
  // git: 'https://github.com/jscottsf/meteor-woopra.git'
});

Npm.depends({"woopra": "0.2.0"});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.0');

  api.export('Woopra');

  api.add_files('woopra_server.js', 'server');
  api.add_files('woopra_client.js', 'client');
});
