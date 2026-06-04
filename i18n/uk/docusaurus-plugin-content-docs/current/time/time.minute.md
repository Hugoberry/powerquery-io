---
title: Time.Minute
---

# Time.Minute


Повертає компонент хвилини.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Повертає компонент хвилини заданого значення `time`, `datetime` або `datetimezone`, `dateTime`.


## Examples

### Example #1
Знайти хвилину в #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
