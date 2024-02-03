---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Повертає дані про початок дня.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Повертає дані про початок дня, указані за допомогою <code>dateTime</code>.    <code>dateTime</code> має бути значенням типу <code>date</code>, <code>datetime</code> або <code>datetimezone</code>.


## Examples

### Example #1 
Виявити початок дня для 10 жовтня 2011 р., 08:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
