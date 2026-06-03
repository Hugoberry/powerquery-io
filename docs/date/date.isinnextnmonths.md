---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Indicates whether this date occurs during the next number of months, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current month.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the next number of months, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current month.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.
-   `months`: The number of months.


## Examples

### Example #1
Determine if the month after the current system time is in the next two months.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
