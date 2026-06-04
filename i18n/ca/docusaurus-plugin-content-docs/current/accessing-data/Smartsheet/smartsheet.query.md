---
title: Smartsheet.Query
---

# Smartsheet.Query


Retorna un resultat JSON de l'API de Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Fa un trucada a l'API de REST de l'Smartsheet 2.0 a l'extrem especificat i retorna els resultats com a registre JSON.


## Examples

### Example #1
Extreu dades de l'extrem de l'API de l'Smartsheet de fulls amb els arguments addicionals especificats
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Una taula amb informació dels fulls tal com la retorna l'API de l'Smartsheet
```



