---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Introduïu l'URL de l'extrem de l'API de REST de l'Azure Enterprise associada amb la inscripció.


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Retorna una llista dels informes i dels mesos disponibles a l'API de l'Azure Enterprise.


## Examples

### Example #1
Ús de la funció AzureEnterprise.Tables i navegació a un valor concret per obtenir els resultats.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Taula
```



