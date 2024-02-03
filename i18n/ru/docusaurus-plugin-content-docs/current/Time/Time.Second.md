---
title: Time.Second
---

# Time.Second


## Description

Возвращает второй компонент.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Возвращает компонент секунд заданного значения <code>time</code>, <code>datetime</code> или <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Поиск второго значения в значении даты и времени.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
