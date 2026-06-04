---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Atgriež mēneša sākumu.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Atgriež tā mēneša sākumu, kas satur `dateTime`. `dateTime` jābūt vērtībai `date` vai `datetime`.


## Examples

### Example #1
Atrodiet mēneša sākumu 2011. gada 10. oktobrim, plkst. 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
