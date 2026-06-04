---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Vraća početak kvartala.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Vraća početak kvartala koji sadrži `dateTime`. `dateTime` mora da bude vrednost `date`, `datetime` ili `datetimezone`.


## Examples

### Example #1
Pronađite početak kvartala za 10. oktobar 2011. u 08:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
