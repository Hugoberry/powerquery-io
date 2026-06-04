---
title: Date.StartOfYear
---

# Date.StartOfYear


Vraća početak godine.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Vraća početak godine koji sadrži `dateTime`. `dateTime` mora da bude vrednost `date`, `datetime` ili `datetimezone`.


## Examples

### Example #1
Pronađite početak godine za 10. oktobar 2011. u 08:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
