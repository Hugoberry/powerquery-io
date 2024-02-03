---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Повертає дані про початок року.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Повертає дані про початок року, які містить <code>dateTime</code>.    <code>dateTime</code> має бути значенням типу <code>date</code>, <code>datetime</code> або <code>datetimezone</code>.


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
