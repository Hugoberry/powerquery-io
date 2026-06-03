---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indicates whether this date occurs during the current year and is on or before the current day, as determined by the current date and time on the system.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the current year and is on or before the current day, as determined by the current date and time on the system.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.


## Examples

### Example #1
Determine if the current system time is in the year to date.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
