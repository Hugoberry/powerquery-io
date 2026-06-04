---
title: Date.StartOfDay
---

# Date.StartOfDay


Vraća početak dana.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Vraća početak dana koji predstavlja `dateTime`. `dateTime` mora da bude vrednost `date`, `datetime` ili `datetimezone`.


## Examples

### Example #1
Pronađite početak dana za 10. oktobar 2011. u 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
