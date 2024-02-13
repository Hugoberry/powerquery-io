---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Возвращает начало недели.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Возвращает начало недели, которая содержит <code>dateTime</code>.    <code>dateTime</code> должно быть значением <code>date</code>, <code>datetime</code> или <code>datetimezone</code>.


## Examples

### Example #1 
Найти начало недели для вторника, 11 октября 2011 г.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Найти начало недели для вторника, 11 октября 2011 г., используя понедельник в качестве начала недели.
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
