---
title: DateTime.Date
---

# DateTime.Date


Возвращает компонент даты для заданного значения date, datetime и datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Возвращает компонент даты <code>dateTime</code> для указанного значения <code>date</code>, <code>datetime</code> или <code>datetimezone</code>.


## Examples

### Example #1 
Поиск значение даты #datetime (2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
