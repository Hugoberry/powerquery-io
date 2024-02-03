---
title: DateTime.Time
---

# DateTime.Time


## Description

Повертає частину часу заданого значення дати й часу.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Повертає частину часу заданого значення дати й часу, <code>dateTime</code>.


## Examples

### Example #1 
Пошук значення часу #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
