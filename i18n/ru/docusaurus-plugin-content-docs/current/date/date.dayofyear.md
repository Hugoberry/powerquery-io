---
title: Date.DayOfYear
---

# Date.DayOfYear


Возвращает число от 1 до 366, представляющее день года.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Возвращает число, представляющее день года в соответствующем значении `date`, `datetime` или `datetimezone`: `dateTime`.


## Examples

### Example #1
День года для 1 марта 2011 г.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
