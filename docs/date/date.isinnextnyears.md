---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indicates whether this date occurs during the next number of years, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current year.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the next number of years, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current year.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.
-   `years`: The number of years.


## Examples

### Example #1
Determine if the year after the current system time is in the next two years.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
