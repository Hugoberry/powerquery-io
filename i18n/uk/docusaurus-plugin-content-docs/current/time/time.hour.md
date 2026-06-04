---
title: Time.Hour
---

# Time.Hour


Повертає компонент години.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Повертає компонент години заданого значення `time`, `datetime` або `datetimezone`, `dateTime`.


## Examples

### Example #1
Знайти годину в #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
