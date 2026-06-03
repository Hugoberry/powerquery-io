---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Returns a number from 28 to 31 indicating the number of days in the month.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Returns the number of days in the month in the `date`, `datetime`, or `datetimezone` value `dateTime`.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value for which the number of days in the month is returned.


## Examples

### Example #1
Number of days in the month December as represented by `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
