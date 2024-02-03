---
title: Time.Hour
---

# Time.Hour


## Description

Tiek atgriezts stundas komponents.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Tiek atgriezts sniegtās <code>time</code>, <code>datetime</code> vai <code>datetimezone</code> vērtības <code>dateTime</code> stundas komponents.


## Examples

### Example #1 
Atrodiet stundu vērtībā #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
