---
title: Date.Month
---

# Date.Month


## Description

Atgriež mēneša komponentu.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Atgriež sniegtās <code>datetime</code> vērtības, <code>dateTime</code>, mēneša komponentu.


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
