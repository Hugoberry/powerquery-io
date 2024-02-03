---
title: Time.Hour
---

# Time.Hour


## Description

Возвращает компонент часов.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Возвращает компонент часов заданного значения <code>time</code>, <code>datetime</code> или <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Найти часы в #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
