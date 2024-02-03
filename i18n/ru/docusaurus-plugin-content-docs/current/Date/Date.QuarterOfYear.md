---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Возвращает число, указывающее квартал года, на который приходится дата.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Возвращает число от 1 до 4, указывающее квартал года, на который приходится дата <code>dateTime</code>. <code>dateTime</code> может иметь значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>.


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
