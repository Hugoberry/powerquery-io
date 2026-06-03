---
title: Time.Second
---

# Time.Second


Возвращает второй компонент.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Возвращает компонент секунд заданного значения `time`, `datetime` или `datetimezone`, `dateTime`.


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
