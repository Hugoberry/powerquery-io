---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Indicates whether this date occurs during the current quarter, as determined by the current date and time on the system.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the current quarter, as determined by the current date and time on the system.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.


## Examples

### Example #1
Determine if the current system time is in the current quarter.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
