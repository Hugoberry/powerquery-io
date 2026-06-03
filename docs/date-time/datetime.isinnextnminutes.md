---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Indicates whether this datetime occurs during the next number of minutes, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current minute.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the next number of minutes, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current minute.

-   `dateTime`: A `datetime`, or `datetimezone` value to be evaluated.
-   `minutes`: The number of minutes.


## Examples

### Example #1
Determine if the minute after the current system time is in the next two minutes.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
