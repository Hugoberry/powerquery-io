---
title: DateTime.Time
---

# DateTime.Time


## Description

Возвращает компонент времени заданного значения datetime.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Возвращает компонент времени заданного значения datetime, <code>dateTime</code>.


## Examples

### Example #1 
Поиск значения времени #datetime (2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
