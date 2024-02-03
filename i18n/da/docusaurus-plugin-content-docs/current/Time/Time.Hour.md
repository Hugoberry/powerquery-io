---
title: Time.Hour
---

# Time.Hour


## Description

Returnerer timekomponenten.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Returnerer timekomponenten af den angivne værdi af typen <code>time</code>, <code>datetime</code> eller <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Find timen i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
