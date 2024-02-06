---
title: Time.Second
---

# Time.Second


Returns the second component.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Returns the second component of the provided <code>time</code>, <code>datetime</code>, or <code>datetimezone</code> value, <code>dateTime</code>.


## Examples

### Example #1 
Find the second value from a datetime value.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
