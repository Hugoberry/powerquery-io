---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

A hét kezdetét adja vissza.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

A következőt tartalmazó hét kezdetét adja vissza: <code>dateTime</code>.    A(z) <code>dateTime</code> csak <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték lehet.


## Examples

### Example #1 
A hét kezdetének megállapítása 2011. október 11., kedd esetén.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
A hét kezdetének megállapítása 2011. október 11., kedd esetén, hétfő használatával a hét kezdeteként.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
