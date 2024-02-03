---
title: Time.Minute
---

# Time.Minute


## Description

Возвращает компонент минут.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Возвращает компонент минут заданного значения <code>time</code>, <code>datetime</code> или <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Найти минуты в #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
