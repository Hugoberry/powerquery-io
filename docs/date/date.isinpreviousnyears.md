---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Indicates whether this date occurs during the previous number of years, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current year.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the previous number of years, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current year.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.
-   `years`: The number of years.


## Examples

### Example #1
Determine if the year before the current system time is in the previous two years.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
