---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Egy JSON-eredményt ad vissza a Smartsheet API-ról


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Hívást küld a Smartsheet 2.0 REST API-ra a megadott végponton, és az eredményeket JSON-rekordként adja vissza.


## Examples

### Example #1 
Adatokat kér le a lapok Smartsheet API-végpontjáról további megadott argumentumokkal
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
A Smartsheet API által visszaadott lapinformációk táblája
```



