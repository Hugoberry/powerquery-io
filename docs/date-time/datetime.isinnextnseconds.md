---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Indicates whether this datetime occurs during the next number of seconds, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current second.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indicates whether the given datetime value `dateTime` occurs during the next number of seconds, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current second.

-   `dateTime`: A `datetime`, or `datetimezone` value to be evaluated.
-   `seconds`: The number of seconds.


## Examples

### Example #1
Determine if the second after the current system time is in the next two seconds.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
