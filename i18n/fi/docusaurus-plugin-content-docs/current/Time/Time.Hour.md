---
title: Time.Hour
---

# Time.Hour


## Description

Palauttaa tuntiosan.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Palauttaa annetun <code>time</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvon <code>dateTime</code> tuntiosan.


## Examples

### Example #1 
Selvitä tunti kohteessa #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
