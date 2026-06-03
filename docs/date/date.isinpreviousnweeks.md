---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Indicates whether this date occurs during the previous number of weeks, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current week.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the previous number of weeks, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current week.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.
-   `weeks`: The number of weeks.


## Examples

### Example #1
Determine if the week before the current system time is in the previous two weeks.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
