---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

A negyedév kezdetét adja vissza.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

A következőt tartalmazó negyedév kezdetét adja vissza: <code>dateTime</code>.    A(z) <code>dateTime</code> csak <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték lehet.


## Examples

### Example #1 
A negyedév kezdetének megállapítása 2011. október 10., 8:00 esetén.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
