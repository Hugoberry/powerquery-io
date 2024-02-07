---
title: Smartsheet.Query
---

# Smartsheet.Query


Returner et JSON-resultat fra Smartsheet-API&#39;en


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Foretager et kald til Smartsheet 2.0 REST-API'en på det angivne slutpunkt og returnerer resultaterne som en JSON-post.


## Examples

### Example #1 
Udtrækker data fra slutpunktet for arkets Smartsheet-API og med yderligere angivne argumenter
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
En tabel med arkoplysninger som returneret af Smartsheet-API'en
```



