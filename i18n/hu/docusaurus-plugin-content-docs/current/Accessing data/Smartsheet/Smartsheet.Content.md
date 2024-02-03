---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

A Smartsheet-indexvégpont adatainak tábláját adja vissza.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Hívást küld a Smartsheet 2.0 REST API-ra a megadott végponton, és táblává alakítja a visszaadott adatelemet.


## Examples

### Example #1 
Lekéri a felhasználók információit tartalmazó táblát a Smartsheet API-tól
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
A Smartsheet API által visszaadott felhasználói információk táblája
```



