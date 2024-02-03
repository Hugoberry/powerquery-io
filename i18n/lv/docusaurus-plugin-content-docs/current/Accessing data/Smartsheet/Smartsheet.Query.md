---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Atgriež JSON rezultātu no Smartsheet API


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Izsauc Smartsheet 2.0 REST API norādītajā galapunktā un atgriež rezultātus kā JSON ierakstu.


## Examples

### Example #1 
Atgādā datus no lapu Smartsheet API galapunkta ar norādītajiem papildu argumentiem
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Smartsheet API atgrieztā tabula ar informāciju par lapām
```



