const newman = require('newman');
var repPath = 'reports/';

var optionsArray = {
    collection: require('./collections/Restful Booker.postman_collection.json'),
    environment: require('./environments/Production.postman_environment.json'),
    reporters: ['cli', 'htmlextra', 'junit'],
    reporter: {
        htmlextra: {
            export: repPath.concat('index.html'),
            title: 'Sesion 2 Report'
        },
        junit: {
            export:
                repPath.concat('junit.xml')
        }
    }
}

newman.run(optionsArray, function (err) {
    if (err) { throw err; }
    console.log('Testing Completed!');
});