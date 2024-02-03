---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Vrátí výsledek JSON z rozhraní Smartsheet API.


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Provede volání rozhraní Smartsheet 2.0 REST API v určeném koncovém bodě a vrátí výsledky jako záznam JSON.


## Examples

### Example #1 
Vrátí data z listů koncového bodu rozhraní Smartsheet API s dalšími určenými argumenty.
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Tabulka s informacemi o listech vrácená rozhraním Smartsheet API
```



