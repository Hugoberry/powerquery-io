---
title: Time.Hour
---

# Time.Hour


Vrne komponento ure.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Vrne komponento ure podane vrednosti `time`, `datetime`ali `datetimezone`, `dateTime`.


## Examples

### Example #1
Poiščite vrednost ure v #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
