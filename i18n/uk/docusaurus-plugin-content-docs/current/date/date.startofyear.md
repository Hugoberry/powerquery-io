---
title: Date.StartOfYear
---

# Date.StartOfYear


Повертає дані про початок року.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Повертає дані про початок року, які містить `dateTime`. `dateTime` має бути значенням типу `date`, `datetime` або `datetimezone`.


## Examples

### Example #1
Виявити початок року для 10 жовтня 2011 р., 08:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
