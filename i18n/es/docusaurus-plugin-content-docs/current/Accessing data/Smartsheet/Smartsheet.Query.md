---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Devuelve un resultado JSON de la API de Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Realiza una llamada a la API de REST de Smartsheet 2.0 en el punto de conexión especificado y devuelve los resultados en forma registro JSON.


## Examples

### Example #1 
Extrae datos del punto de conexión de la API de Smartsheet de hojas con los argumentos adicionales especificados
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Una tabla con información de las hojas tal como la devuelve la API de Smartsheet
```



