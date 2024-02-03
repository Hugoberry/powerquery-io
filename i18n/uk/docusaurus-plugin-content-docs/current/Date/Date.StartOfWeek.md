---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Повертає початок тижня.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Повертає дані про початок тижня, які містить <code>dateTime</code>.    <code>dateTime</code> має бути значенням типу <code>date</code>, <code>datetime</code> або <code>datetimezone</code>.


## Examples

### Example #1 
Знайдіть початок тижня для вівторка, 11 жовтня 2011 р.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Знайдіть початок тижня для вівторка, 11 жовтня 2011 р., використовуючи понеділок як початок тижня.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
