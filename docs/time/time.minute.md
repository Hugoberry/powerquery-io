---
title: Time.Minute
---

# Time.Minute


Returns the minute component.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Returns the minute component of the provided `time`, `datetime`, or `datetimezone` value, `dateTime`.


## Examples

### Example #1
Find the minute in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
