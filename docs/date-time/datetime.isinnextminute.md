---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Indicates whether this datetime occurs during the next minute, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current minute.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the next minute, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current minute.

-   `dateTime`: A `datetime`, or `datetimezone` value to be evaluated.


## Examples

### Example #1
Determine if the minute after the current system time is in the next minute.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
