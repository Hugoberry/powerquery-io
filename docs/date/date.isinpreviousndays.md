---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Indicates whether this date occurs during the previous number of days, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current day.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the previous number of days, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current day.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.
-   `days`: The number of days.


## Examples

### Example #1
Determine if the day before the current system time is in the previous two days.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
