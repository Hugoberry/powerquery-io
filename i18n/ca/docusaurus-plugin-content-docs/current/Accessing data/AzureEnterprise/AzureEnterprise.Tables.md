---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Introduïu l&#39;URL de l&#39;extrem de l&#39;API de REST de l&#39;Azure Enterprise associada amb la inscripció.


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

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



