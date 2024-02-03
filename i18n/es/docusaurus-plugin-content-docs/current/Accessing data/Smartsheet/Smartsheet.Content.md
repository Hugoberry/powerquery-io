---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Devuelve una tabla de datos de un punto de conexión de índice de Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Realiza una llamada a la API de REST de Smartsheet 2.0 en el punto de conexión especificado y transforma el elemento de datos devuelto en una tabla.


## Examples

### Example #1 
Extrae una tabla de información de usuarios de la API de Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Una tabla con información de los usuarios tal como la devuelve la API de Smartsheet
```



