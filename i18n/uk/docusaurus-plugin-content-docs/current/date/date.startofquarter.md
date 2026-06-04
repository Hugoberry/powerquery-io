---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Повертає дані про початок кварталу.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Повертає дані про початок кварталу, які містить `dateTime`. `dateTime` має бути значенням типу `date`, `datetime` або `datetimezone`.


## Examples

### Example #1
Виявити дані про початок кварталу для 10 жовтня 2011 р., 08:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
