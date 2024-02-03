---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Az év kezdetét adja vissza.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

A következőt tartalmazó év kezdetét adja vissza: <code>dateTime</code>.    A(z) <code>dateTime</code> csak <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték lehet.


## Examples

### Example #1 
Az év kezdetének megállapítása 2011. október 10., 8:10:32 esetén.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
