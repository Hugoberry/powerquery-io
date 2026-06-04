---
title: Date.StartOfDay
---

# Date.StartOfDay


Atgriež dienas sākumu.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Atgriež dienas sākumu, kas apzīmēts ar `dateTime`. `dateTime` jābūt vērtībai `date`, `datetime` vai `datetimezone`.


## Examples

### Example #1
Atrodiet dienas sākumu 2011. gada 10. oktobrim, plkst. 8.00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
