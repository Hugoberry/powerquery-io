---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Indicates whether this date occurs during the next number of days, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current day.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the next number of days, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current day.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.
-   `days`: The number of days.


## Examples

### Example #1
Determine if the day after the current system time is in the next two days.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
