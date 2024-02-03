---
title: Time.Hour
---

# Time.Hour


## Description

Повертає компонент години.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Повертає компонент години заданого значення <code>time</code>, <code>datetime</code> або <code>datetimezone</code>, <code>dateTime</code>.


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
