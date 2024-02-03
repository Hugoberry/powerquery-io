---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

A nap kezdetét adja vissza.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

A következő által jelölt nap kezdetét adja vissza: <code>dateTime</code>.    A(z) <code>dateTime</code> csak <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték lehet.


## Examples

### Example #1 
A nap kezdetének megállapítása 2011. október 10., 8:00 esetén.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
