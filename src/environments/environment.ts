// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "Your API KEY",
    authDomain: "smartbin-c423c.firebaseapp.com",
    databaseURL: "https://smartbin-c423c.firebaseio.com",
    projectId: "smartbin-c423c",
    storageBucket: "smartbin-c423c.appspot.com",
    messagingSenderId: "961867237068"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
