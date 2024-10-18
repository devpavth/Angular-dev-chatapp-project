// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe: {
    publishableKey: 'pk_test_51OSGOzSIkNIxCI012A74UTB3ldXyLyaCce7UyeE3ekjLmxnwDBMUvb8K4iUrQZhrQNSrA7v8Zjs2hjQZkMevm80L00e9tAfsL4',
    secretKey: 'sk_test_51OSGOzSIkNIxCI01wwDbnshaiCV5YiHYu52gnWOiCrvsn3mKD5WXVjWEHdnXwGHbbqRHjfoRiug5P7zDZ1ekC49C00vIuc7WRZ'
  },
  api: 'http://localhost:3000/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
