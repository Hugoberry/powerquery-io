---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indicates whether this datetime occurs during the current hour, as determined by the current date and time on the system.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the current hour, as determined by the current date and time on the system.

-   `dateTime`: A `datetime`, or `datetimezone` value to be evaluated.


## Examples

### Example #1
Determine if the current system time is in the current hour.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
