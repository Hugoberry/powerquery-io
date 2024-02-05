---
title: Time.Hour
---

# Time.Hour


## Description

Returnerar timkomponenten.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Returnerar timkomponenten för angivet <code>time</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde, <code>dateTime</code>.


## Examples

### Example #1 
Hitta timmen i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
