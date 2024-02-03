---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Повертає дані про початок години.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Повертає дані про початок години, указані за допомогою <code>dateTime</code>.    <code>dateTime</code> має бути значенням типу <code>time</code>, <code>datetime</code> або <code>datetimezone</code>.


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
