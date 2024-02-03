---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Vráti výsledok vo formáte JSON z rozhrania Smartsheet API


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Uskutoční volanie do zadaného koncového bodu rozhrania Smartsheet 2.0 REST API a vráti výsledok ako záznam vo formáte JSON.


## Examples

### Example #1 
Stiahne údaje z hárkov koncového bodu rozhrania Smartsheet API s ďalšími zadanými argumentmi
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Tabuľka s informáciami o hárkoch, ktorú vrátilo rozhranie API Smartsheet
```



