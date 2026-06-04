---
title: Time.Minute
---

# Time.Minute


Tiek atgriezts minūtes komponents.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Tiek atgriezts sniegtās `time`, `datetime` vai `datetimezone` vērtības `dateTime` minūtes komponents.


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
