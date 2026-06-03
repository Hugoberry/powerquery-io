---
title: Date.AddYears
---

# Date.AddYears


Adds the specified years to the date.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Returns the `date`, `datetime`, or `datetimezone` result of adding `numberOfYears` to a `datetime` value `dateTime`.

-   `dateTime`: The `date`, `datetime`, or `datetimezone` value to which years are added.
-   `numberOfYears`: The number of years to add.


## Examples

### Example #1
Add 4 years to the `date`, `datetime`, or `datetimezone` value representing the date 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Add 10 years to the `date`, `datetime`, or `datetimezone` value representing the date and time of 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
