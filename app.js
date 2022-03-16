var newman = require('newman'); // require Newman in your project

var repPath = 'reports/';

optionsArray = {
    collection: require('./collections/Restful Booker.postman_collection.json'),
    environment: require('./environments/Production.postman_environment.json'),
    reporters: ['cli', 'htmlextra'],
    reporter: { htmlextra: { export: repPath.concat('index.html'), title: 'Sesion 2 Report' } }
}

newman.run(optionsArray, function (err) {
    if (err) { throw err; }
    console.log('Testing Completed!');
});