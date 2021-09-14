module.exports = {
  // The default application.
  appName: 'multikart',
  // The port used by the local http express server.
  httpPort: 3006,
  // The port used by the local https express server.
  httpsPort: 443,
  // The hostname used by the local http express server.
  httpHost: 'localhost',
  // The hostname used by the local https express server.
  httpsHost: 'localhost',
  // Sets the mode for DS assets. "local" will use the assets in the workspace.
  // Otherwise they will be fetched from the OCC server.
  dsAssetMode: 'local',
  // Sets the context for live and preview operations
  live: false,
  // Enables verbose logging
  verbose: false,
  // The location in the workspace where the ssl key ad cert files
  // are located.
  sslKey: 'config/ssl/key.pem',
  sslCert: 'config/ssl/cert.pem',
  // The default server configuration to use.
  serverEnv: 'development',
  // The occ server configuration for the 'development' environment
  serverConfig: {
    development:
    {
      appServerAdmin: 'https://ademo5c1tst-admin.occa.ocs.oc-test.com/',
      appServer: 'https://ademo5c1tst-store.occa.ocs.oc-test.com/',
      appKey:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3ODlhOTRiNC1mMTNkLTQ0NjgtYTg3ZC0wNzE0Y2YwZThjYzgiLCJpc3MiOiJhcHBsaWNhdGlvbkF1dGgiLCJleHAiOjE2Mjk5NjUzMDksImlhdCI6MTU5ODQyOTMwOX0=.f1L2lOpX9npaOZJTs9Ml0tAfJbY4qOhZmh1LrPBcHNo='
    },
    test:
    {
      appServerAdmin: 'http://testadminserver.example.com:9080',
      appServer: 'http://testserver.example.com:9080'
    },
    production:
    {
      appServerAdmin: 'http://prodadminserver.example.com:9080',
      appServer: 'http://prodserver.example.com:9080'
    }
  }
};
