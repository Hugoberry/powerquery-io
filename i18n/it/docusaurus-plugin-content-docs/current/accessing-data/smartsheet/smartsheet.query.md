---
title: Smartsheet.Query
---

# Smartsheet.Query


Restituisce un risultato JSON dall&#39;API Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Effettua una chiamata all'API REST Smartsheet 2.0 all'endpoint specificato e restituisce i risultati come un record JSON.


## Examples

### Example #1 
Esegue il pull dei dati relativi ai fogli dall&#39;endpoint API Smartsheet con argomenti aggiuntivi specificati
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Tabella con le informazioni sui fogli come restituita dall'API Smartsheet
```



