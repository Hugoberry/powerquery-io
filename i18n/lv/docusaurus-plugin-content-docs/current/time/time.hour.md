---
title: Time.Hour
---

# Time.Hour


Tiek atgriezts stundas komponents.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Tiek atgriezts sniegtās `time`, `datetime` vai `datetimezone` vērtības `dateTime` stundas komponents.


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
