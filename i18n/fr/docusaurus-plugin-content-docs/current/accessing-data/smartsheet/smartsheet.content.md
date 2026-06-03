---
title: Smartsheet.Content
---

# Smartsheet.Content


Retourne une table de données à partir d'un point de terminaison d'index Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Effectue un appel à l'API REST Smartsheet 2.0 au niveau du point de terminaison spécifié et transforme l'élément de données retourné en table.


## Examples

### Example #1
Extrait une table d'informations sur les utilisateurs à partir de l'API Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Table contenant les informations sur les utilisateurs retournées par l'API Smartsheet
```



