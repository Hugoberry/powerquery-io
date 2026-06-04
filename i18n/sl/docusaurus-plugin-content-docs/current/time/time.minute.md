---
title: Time.Minute
---

# Time.Minute


Vrne komponento minute.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Vrne komponento minute podane vrednosti `time`, `datetime` ali `datetimezone`, `dateTime`.


## Examples

### Example #1
Poiščite vrednost minute v #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
