---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indicates whether this date occurs during the current year, as determined by the current date and time on the system.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the current year, as determined by the current date and time on the system.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.


## Examples

### Example #1
Determine if the current system time is in the current year.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
