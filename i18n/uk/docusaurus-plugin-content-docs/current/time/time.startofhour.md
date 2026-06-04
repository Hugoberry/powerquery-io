---
title: Time.StartOfHour
---

# Time.StartOfHour


Повертає дані про початок години.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Повертає дані про початок години, указані за допомогою `dateTime`. `dateTime` має бути значенням типу `time`, `datetime` або `datetimezone`.


## Examples

### Example #1
Виявити початок години для 10 жовтня 2011 р., 08:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
