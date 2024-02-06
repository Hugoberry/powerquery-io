---
title: Date.StartOfDay
---

# Date.StartOfDay


Возвращает начало дня.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Возвращает начало дня, который представлен с использованием <code>dateTime</code>.    <code>dateTime</code> должно быть значением <code>date</code>, <code>datetime</code> или <code>datetimezone</code>.


## Examples

### Example #1 
Поиск начала дня для 10 октября 2011 г., 8:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
