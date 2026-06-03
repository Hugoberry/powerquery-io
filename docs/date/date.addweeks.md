---
title: Date.AddWeeks
---

# Date.AddWeeks


Adds the specified weeks to the date.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Returns the `date`, `datetime`, or `datetimezone` result from adding `numberOfWeeks` weeks to the `datetime` value `dateTime`.

-   `dateTime`: The `date`, `datetime`, or `datetimezone` value to which weeks are being added.
-   `numberOfWeeks`: The number of weeks to add.


## Examples

### Example #1
Add 2 weeks to the `date`, `datetime`, or `datetimezone` value representing the date 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
