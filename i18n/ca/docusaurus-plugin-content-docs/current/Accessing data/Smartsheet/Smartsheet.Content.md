---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Retorna una taula amb dades d&#39;un extrem d&#39;índex de l&#39;Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Fa una trucada a l'API de REST de l'Smartsheet 2.0 a l'extrem especificat i transforma l'element de dades en una taula.


## Examples

### Example #1 
Extreu una taula d&#39;informació d&#39;usuaris de l&#39;API de l&#39;Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Una taula amb informació d'usuaris tal com la retorna l'API de l'Smartsheet
```



