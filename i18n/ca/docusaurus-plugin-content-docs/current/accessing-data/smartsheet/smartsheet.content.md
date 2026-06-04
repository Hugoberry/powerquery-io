---
title: Smartsheet.Content
---

# Smartsheet.Content


Retorna una taula amb dades d'un extrem d'índex de l'Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

Fa una trucada a l'API de REST de l'Smartsheet 2.0 a l'extrem especificat i transforma l'element de dades en una taula.


## Examples

### Example #1
Extreu una taula d'informació d'usuaris de l'API de l'Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Una taula amb informació d'usuaris tal com la retorna l'API de l'Smartsheet
```



