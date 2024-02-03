---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Pateikiama dienos pradžia.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Pateikiama dienos, kurioje yra <code>dateTime</code>, pradžia.    <code>dateTime</code> turi būti <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.


## Examples

### Example #1 
Rasti 2011 m. spalio 10 d. 8:00 dienos pradžią.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
