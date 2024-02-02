---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Entrer l&#39;URL du point de terminaison de l&#39;API REST Azure Enterprise associé à votre inscription


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Retourne la liste des rapports et des mois disponible à partir de l'API Azure Enterprise


## Examples

### Example #1 
Utilisation de la fonction AzureEnterprise.Tables et accès à une valeur particulière pour obtenir les résultats.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Table
```



