---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Повертає дані про початок кварталу.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Повертає дані про початок кварталу, які містить <code>dateTime</code>.      <code>dateTime</code> має бути значенням типу <code>date</code>, <code>datetime</code> або <code>datetimezone</code>.


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
