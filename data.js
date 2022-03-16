var newman = require('newman'); // require Newman in your project

var repPath = 'reports/';

var optionsArray = {
    collection: require('./collections/Using data files.postman_collection.json'),
    iterationData: require('./data/data.json'),
    reporters: ['cli', 'htmlextra', 'junit'],
    reporter: { htmlextra: { export: repPath.concat('data.html'), title: 'Sesion 2 Report' }, junit: { export: repPath.concat('junit.xml') } }
}

newman.run(optionsArray, function (err) {
    if (err) { throw err; }
    console.log('Testing Completed!');
});