---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Επιστρέφει το τέλος του μήνα.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

Returns the end of the month that contains `dateTime`.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value from which the end of the month is calculated.


## Examples

### Example #1
Λάβετε το τέλος του μήνα για τις 14/5/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
Λάβετε το τέλος του μήνα για τις 17/5/2011 05:00:00 μ.μ. -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
