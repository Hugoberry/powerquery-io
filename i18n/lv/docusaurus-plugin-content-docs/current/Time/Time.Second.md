---
title: Time.Second
---

# Time.Second


## Description

Tiek atgriezts sekundes komponents.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Tiek atgriezts sniegtās <code>time</code>, <code>datetime</code> vai <code>datetimezone</code> vērtības <code>dateTime</code> sekundes komponents.


## Examples

### Example #1 
Atrodiet sekundes vērtību vērtībā datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
