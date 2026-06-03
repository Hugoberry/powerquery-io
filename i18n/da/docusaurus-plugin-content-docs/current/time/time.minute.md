---
title: Time.Minute
---

# Time.Minute


Returnerer minutkomponeten.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Returnerer minutkomponenten af den angivne værdi af typen `time`, `datetime` eller `datetimezone`, `dateTime`.


## Examples

### Example #1
Find minuttet i #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
