---
title: Date.IsLeapYear
---

# Date.IsLeapYear


Indicates whether this date falls in a leap year.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` falls in is a leap year.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value to be evaluated.


## Examples

### Example #1
Determine if the year 2012, as represented by `#date(2012, 01, 01)` is a leap year.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
