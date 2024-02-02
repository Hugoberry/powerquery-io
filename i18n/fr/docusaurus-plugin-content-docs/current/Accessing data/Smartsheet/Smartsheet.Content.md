---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Retourne une table de données à partir d&#39;un point de terminaison d&#39;index Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Effectue un appel à l'API REST Smartsheet 2.0 au niveau du point de terminaison spécifié et transforme l'élément de données retourné en table.


## Examples

### Example #1 
Extrait une table d&#39;informations sur les utilisateurs à partir de l&#39;API Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Table contenant les informations sur les utilisateurs retournées par l'API Smartsheet
```



