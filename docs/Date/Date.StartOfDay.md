---
title: Date.StartOfDay
---

# Date.StartOfDay


Returns the start of the day.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Returns the start of the day represented by <code>dateTime</code>.    <code>dateTime</code> must be a <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value.


## Examples

### Example #1 
Find the start of the day for October 10th, 2011, 8:00AM.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
