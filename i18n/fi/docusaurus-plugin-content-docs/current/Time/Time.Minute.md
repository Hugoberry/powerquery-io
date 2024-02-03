---
title: Time.Minute
---

# Time.Minute


## Description

Palauttaa minuuttiosan.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Palauttaa annetun <code>time</code>-, <code>datetime</code>- tai <code>datetimezone</code>-arvon <code>dateTime</code> minuuttiosan.


## Examples

### Example #1 
Selvitä minuuttikohteessa #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
