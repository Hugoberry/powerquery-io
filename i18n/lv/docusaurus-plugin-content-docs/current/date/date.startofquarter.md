---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Atgriež ceturkšņa sākumu.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Atgriež ceturkšņa sākumu, kas satur `dateTime`. `dateTime` jābūt vērtībai `date`, `datetime` vai `datetimezone`.


## Examples

### Example #1
Atrodiet ceturkšņa sākumu 2011. gada 10. oktobrim, plkst. 8.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
