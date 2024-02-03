---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

A hónap kezdetét adja vissza.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

A következőt tartalmazó hónap kezdetét adja vissza: <code>dateTime</code>.    A(z) <code>dateTime</code> csak <code>date</code> vagy <code>datetime</code> típusú érték lehet.


## Examples

### Example #1 
A hónap kezdetének megállapítása 2011. október 10., 8:10:32 esetén.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
