---
title: DateTime.Date
---

# DateTime.Date


## Description

Повертає компонент дати заданого значення date, datetime або datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

Повертає компонент дати <code>dateTime</code>, заданого значення <code>date</code>, <code>datetime</code> або <code>datetimezone</code>.


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
