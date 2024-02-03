---
title: Time.Minute
---

# Time.Minute


## Description

Returnerer minutkomponeten.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Returnerer minutkomponenten af den angivne værdi af typen <code>time</code>, <code>datetime</code> eller <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Find minuttet i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
