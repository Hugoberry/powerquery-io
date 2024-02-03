---
title: DateTime.Time
---

# DateTime.Time


## Description

Atgriež sniegtās datetime vērtības laika daļu.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Atgriež sniegtās datetime vērtības, <code>dateTime</code>, laika daļu.


## Examples

### Example #1 
Atrast laika vērtību vērtībai #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
