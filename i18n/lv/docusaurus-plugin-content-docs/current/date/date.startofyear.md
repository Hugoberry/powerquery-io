---
title: Date.StartOfYear
---

# Date.StartOfYear


Atgriež gada sākumu.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Atgriež gada sākumu, kas satur `dateTime`. `dateTime` jābūt vērtībai `date`, `datetime` vai `datetimezone`.


## Examples

### Example #1
Atrodiet gada sākumu 2011. gada 10. oktobrim, plkst. 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
