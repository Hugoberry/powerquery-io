---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Vrátí tabulku dat z koncového bodu indexu Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Provede volání rozhraní Smartsheet 2.0 REST API v určeném koncovém bodě a převede vrácený datový element na tabulku.


## Examples

### Example #1 
Vrátí tabulku s informacemi o uživatelích z rozhraní Smartsheet API.
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Tabulka s informacemi o uživatelích vrácená rozhraním Smartsheet API
```



