---
title: Time.Second
---

# Time.Second


Vrne komponento sekunde.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Vrne komponento sekunde podane vrednosti `time`, `datetime` ali `datetimezone`, `dateTime`.


## Examples

### Example #1
Poiščite vrednost sekunde v vrednosti"datetime".
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
