---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Returnează un rezultat JSON de la API-ul Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Efectuează un apel la API-ul REST Smartsheet 2.0 la punctul final specificat și returnează rezultatele ca înregistrare JSON.


## Examples

### Example #1 
Extrage date de la punctul final API Smartsheet al foilor cu argumente suplimentare specificate
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Un tabel cu informații de foi, returnat de API-ul Smartsheet
```



