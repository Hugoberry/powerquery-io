---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Indicates whether this date occurs during the next week, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current week.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the next week, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current week.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.


## Examples

### Example #1
Determine if the week after the current system time is in the next week.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
