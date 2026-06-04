---
title: Time.Second
---

# Time.Second


Повертає компонент секунди.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Повертає компонент секунди заданого значення `time`, `datetime` або `datetimezone`, `dateTime`.


## Examples

### Example #1
Пошук значення секунди в значенні дати й часу.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
