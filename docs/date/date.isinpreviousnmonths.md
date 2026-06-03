---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Indicates whether this date occurs during the previous number of months, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current month.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the previous number of months, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current month.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.
-   `months`: The number of months.


## Examples

### Example #1
Determine if the month before the current system time is in the previous two months.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
