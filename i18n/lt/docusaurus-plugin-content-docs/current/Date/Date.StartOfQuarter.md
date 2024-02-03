---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Pateikiama ketvirčio pradžia.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Pateikiama ketvirčio, kuriame yra <code>dateTime</code>, pradžia.     <code>dateTime</code> turi būti <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė.


## Examples

### Example #1 
Rasti 2011 m. spalio 10 d. 8:00 ketvirčio pradžią.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
