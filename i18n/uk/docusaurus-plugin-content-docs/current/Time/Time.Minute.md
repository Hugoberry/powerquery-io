---
title: Time.Minute
---

# Time.Minute


## Description

Повертає компонент хвилини.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Повертає компонент хвилини заданого значення <code>time</code>, <code>datetime</code> або <code>datetimezone</code>, <code>dateTime</code>.


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
