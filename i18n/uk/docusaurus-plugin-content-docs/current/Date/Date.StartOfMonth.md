---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Повертає дані про початок місяця.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Повертає дані про початок місяця, які містить <code>dateTime</code>.    <code>dateTime</code> має бути значенням типу <code>date</code> або <code>datetime</code>.


## Examples

### Example #1 
Виявити початок місяця для 10 жовтня 2011 р., 08:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
