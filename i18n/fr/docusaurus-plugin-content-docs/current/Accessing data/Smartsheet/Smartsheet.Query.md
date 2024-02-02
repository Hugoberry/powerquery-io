---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Retourne un résultat JSON à partir de l&#39;API Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Effectue un appel à l'API REST Smartsheet 2.0 au niveau du point de terminaison spécifié et retourne les résultats sous la forme d'un enregistrement JSON.


## Examples

### Example #1 
Extrait des données à partir du point de terminaison d&#39;API Smartsheet des feuilles avec des arguments supplémentaires spécifiés
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Table contenant les informations sur les feuilles retournées par l'API Smartsheet
```



