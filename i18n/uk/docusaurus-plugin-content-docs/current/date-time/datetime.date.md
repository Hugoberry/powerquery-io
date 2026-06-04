---
title: DateTime.Date
---

# DateTime.Date


Повертає компонент дати заданого значення date, datetime або datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Повертає компонент дати параметра `dateTime`, якщо параметр має значення `date`, `datetime` або `datetimezone`, або `null`, якщо параметр має значення `null`.


## Examples

### Example #1
Пошук значення дати #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
