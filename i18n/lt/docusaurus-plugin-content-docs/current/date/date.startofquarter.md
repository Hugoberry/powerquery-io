---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Pateikiama ketvirčio pradžia.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Pateikiama ketvirčio, kuriame yra `dateTime`, pradžia. `dateTime` turi būti `date`, `datetime` arba `datetimezone` reikšmė.


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
