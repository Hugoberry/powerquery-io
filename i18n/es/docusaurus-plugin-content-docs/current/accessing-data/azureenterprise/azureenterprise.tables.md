---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Escriba la dirección URL del punto de conexión de la API de REST de Azure Enterprise que se ha asociado a su inscripción


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Devuelve una lista de los informes y meses disponibles de la API de Azure Enterprise


## Examples

### Example #1
Usar la función AzureEnterprise.Tables y dirigirse a un valor particular para obtener los resultados.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tabla
```



