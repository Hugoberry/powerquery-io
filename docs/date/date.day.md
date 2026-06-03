---
title: Date.Day
---

# Date.Day


Returns the day component.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Returns the day component of a `date`, `datetime`, or `datetimezone` value.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value from which the day component is extracted.


## Examples

### Example #1
Get the day component of a `date`, `datetime`, or `datetimezone` value representing the date and time of 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
