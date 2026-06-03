---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Indicates whether this date occurs during the next number of quarters, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current quarter.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the next number of quarters, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current quarter.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.
-   `quarters`: The number of quarters.


## Examples

### Example #1
Determine if the quarter after the current system time is in the next two quarters.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
