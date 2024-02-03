---
title: Time.Minute
---

# Time.Minute


## Description

Tiek atgriezts minūtes komponents.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Tiek atgriezts sniegtās <code>time</code>, <code>datetime</code> vai <code>datetimezone</code> vērtības <code>dateTime</code> minūtes komponents.


## Examples

### Example #1 
Atrodiet minūti vērtībā #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
