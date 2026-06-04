---
title: Date.Month
---

# Date.Month


Atgriež mēneša komponentu.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Atgriež sniegtās `datetime` vērtības, `dateTime`, mēneša komponentu.


## Examples

### Example #1
Atrodiet mēnesi vērtībā #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
