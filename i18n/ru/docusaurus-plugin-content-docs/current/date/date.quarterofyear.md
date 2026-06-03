---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Возвращает число, указывающее квартал года, на который приходится дата.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Возвращает число от 1 до 4, указывающее квартал года, на который приходится дата `dateTime`. `dateTime` может иметь значение `date`, `datetime` или `datetimezone`.


## Examples

### Example #1
Поиск квартала года для даты в #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
