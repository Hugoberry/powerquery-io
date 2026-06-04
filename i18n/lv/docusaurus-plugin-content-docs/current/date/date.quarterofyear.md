---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Atgriež skaitli, kas norāda, kurā gada ceturksnī šis datums iekrīt.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Atgriež skaitli no 1 līdz 4, kas norāda, kurā gada ceturksnī iekrīt datums `dateTime`. `dateTime` var būt `date`, `datetime` vai `datetimezone` vērtība.


## Examples

### Example #1
Atrodiet, kurā gada ceturksnī iekrīt datums #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
