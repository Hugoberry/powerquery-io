---
title: Smartsheet.Query
---

# Smartsheet.Query


Hiermee wordt een JSON-resultaat geretourneerd via de Smartsheet-API


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

Hiermee wordt een aanroep verzonden naar de Smartsheet 2.0 REST API op het opgegeven eindpunt en worden de resultaten geretourneerd als JSON-record.


## Examples

### Example #1 
Hiermee worden gegevens opgehaald uit de bladen op het Smartsheet-API-eindpunt waarvoor extra argumenten zijn opgegeven
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Een tabel met bladgegevens die zijn geretourneerd door de Smartsheet-API
```



