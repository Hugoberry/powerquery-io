---
title: Time.Second
---

# Time.Second


Tiek atgriezts sekundes komponents.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Tiek atgriezts sniegtās `time`, `datetime` vai `datetimezone` vērtības `dateTime` sekundes komponents.


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
