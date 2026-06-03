---
title: Date.AddQuarters
---

# Date.AddQuarters


Adds the specified quarters to the date.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Returns the `date`, `datetime`, or `datetimezone` result from adding `numberOfQuarters` quarters to the `datetime` value `dateTime`.

-   `dateTime`: The `date`, `datetime`, or `datetimezone` value to which quarters are being added.
-   `numberOfQuarters`: The number of quarters to add.


## Examples

### Example #1
Add 1 quarter to the `date`, `datetime`, or `datetimezone` value representing the date 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
