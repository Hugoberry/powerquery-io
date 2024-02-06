---
title: Time.Hour
---

# Time.Hour


Returns the hour component.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Returns the hour component of the provided <code>time</code>, <code>datetime</code>, or <code>datetimezone</code> value, <code>dateTime</code>.


## Examples

### Example #1 
Find the hour in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
