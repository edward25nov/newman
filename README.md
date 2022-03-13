# Newman
Sesión 2 uso de newman

## Instalación

* Newman
```
$ npm install -g newman
```
* HtmlExtra
```
$ npm install -g newman-reporter-htmlextra
```

### Usando Newman CLI

```
$ newman run "collections\Restful Booker.postman_collection.json" -e environments\Production.postman_environment.json
```
### Usando Reportes con Newman
```
newman run "collections\Restful Booker.postman_collection.json" -e environments\Production.postman_environment.json -r htmlextra --reporter-htmlextra-export ./reports
```
```
newman run "collections\Restful Booker.postman_collection.json" -e environments\Production.postman_environment.json -r htmlextra --reporter-htmlextra-export ./reports/report.html
```