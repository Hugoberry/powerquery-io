---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Indicates whether this datetime occurs during the previous second, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current second.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the previous second, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current second.      <ul>      <li><code>dateTime</code>: A <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the second before the current system time is in the previous second.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
