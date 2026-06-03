---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Возвращает начало квартала.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Возвращает начало квартала, который содержит `dateTime`. `dateTime` должно быть значением `date`, `datetime` или `datetimezone`.


## Examples

### Example #1
Поиск начала квартала для 10 октября 2011 г., 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
