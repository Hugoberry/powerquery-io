---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Devolve unha táboa de datos dun extremo de índice de Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Realiza unha chamada á API de REST de Smartsheet 2.0 no extremo especificado e transforma o elemento de datos devolto nunha táboa.


## Examples

### Example #1 
Extrae unha táboa da información dos usuarios desde a API de Smartsheet
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Unha táboa coa información dos usuarios como a devolveu a API de Smartsheet
```



