// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA6DahZ7abZuFbb1PRySlsxhKSphDI_gRc',
    authDomain: 'ng-fitness-tracker-a4022.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-a4022.firebaseio.com',
    projectId: 'ng-fitness-tracker-a4022',
    storageBucket: 'ng-fitness-tracker-a4022.appspot.com',
    messagingSenderId: '172209941680'
  }
};
