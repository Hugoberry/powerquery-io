---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Retorna un resultat JSON de l&#39;API de Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Fa un trucada a l'API de REST de l'Smartsheet 2.0 a l'extrem especificat i retorna els resultats com a registre JSON.


## Examples

### Example #1 
Extreu dades de l&#39;extrem de l&#39;API de l&#39;Smartsheet de fulls amb els arguments addicionals especificats
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Una taula amb informació dels fulls tal com la retorna l'API de l'Smartsheet
```



