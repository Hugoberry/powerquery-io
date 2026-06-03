---
title: Date.AddDays
---

# Date.AddDays


Adds the specified days to the date.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Returns the `date`, `datetime`, or `datetimezone` result from adding `numberOfDays` days to the `datetime` value `dateTime`.

-   `dateTime`: The `date`, `datetime`, or `datetimezone` value to which days are being added.
-   `numberOfDays`: The number of days to add.


## Examples

### Example #1
Add 5 days to the `date`, `datetime`, or `datetimezone` value representing the date 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
