---
title: Date.StartOfYear
---

# Date.StartOfYear


Возвращает начало года.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Возвращает начало года, который содержит <code>dateTime</code>.    <code>dateTime</code> должно быть значением <code>date</code>, <code>datetime</code> или <code>datetimezone</code>.


## Examples

### Example #1 
Поиск начала года для 10 октября 2011 г., 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
