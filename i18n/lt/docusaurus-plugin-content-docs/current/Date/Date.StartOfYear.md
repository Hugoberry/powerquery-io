---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Pateikiama metų pradžia.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Pateikiama metų, kuriuose yra <code>dateTime</code>, pradžia.     <code>dateTime</code> turi būti <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.


## Examples

### Example #1 
Rasti 2011 m. spalio 10 d. 8:10:32 metų pradžią.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
