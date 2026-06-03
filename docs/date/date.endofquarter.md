---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Returns the end of the quarter.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Returns the end of the quarter that contains `dateTime`. Time zone information is preserved.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value from which the end of the quarter is calculated.


## Examples

### Example #1
Find the end of the quarter for October 10th, 2011, 8:00AM.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
