---
title: Time.EndOfHour
---

# Time.EndOfHour


Returns the end of the hour.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Returns the end of the hour represented by `dateTime`, including fractional seconds. Time zone information is preserved.

-   `dateTime`: A `time`, `datetime`, or `datetimezone` value from which the end of the hour is calculated.


## Examples

### Example #1
Get the end of the hour for 5/14/2011 05:00:00 PM.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Get the end of the hour for 5/17/2011 05:00:00 PM -7:00.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
