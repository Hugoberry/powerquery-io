---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Pateikiama mėnesio pradžia.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Pateikiama mėnesio, kuriame yra `dateTime`, pradžia. `dateTime` turi būti `date` arba `datetime` reikšmė.


## Examples

### Example #1
Rasti 2011 m. spalio 10 d. 8:10:32 mėnesio pradžią.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
