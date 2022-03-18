# Newman
Sesion 2 uso de newman

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
* Utilizando colección y ambientes
```
$ newman run "collections\Restful Booker.postman_collection.json" -e environments\Production.postman_environment.json
```
* Utilizando data
```
$ newman run "collections\Using data files.postman_collection.json" -d data\data.json
```
### Usando Reportes con Newman
* Generando reporte con diferente nombre
```
$ newman run "collections\Restful Booker.postman_collection.json" -e environments\Production.postman_environment.json -r htmlextra --reporter-htmlextra-export ./reports
```
* Generando reporte con nombre definido
```
$ newman run "collections\Restful Booker.postman_collection.json" -e environments\Production.postman_environment.json -r htmlextra --reporter-htmlextra-export ./reports/report.html
```