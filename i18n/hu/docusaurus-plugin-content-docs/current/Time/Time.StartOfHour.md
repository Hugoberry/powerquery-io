---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Az óra kezdetét adja vissza.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

A következő által jelölt óra kezdetét adja vissza: <code>dateTime</code>.    A(z) <code>dateTime</code> csak <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték lehet.


## Examples

### Example #1 
Az óra kezdetének megállapítása 2011. október 10., 8:10:32 esetén.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
