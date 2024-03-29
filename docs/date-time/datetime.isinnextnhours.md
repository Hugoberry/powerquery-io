---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Indicates whether this datetime occurs during the next number of hours, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current hour.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the next number of hours, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current hour.      <ul>      <li><code>dateTime</code>: A <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      <li><code>hours</code>: The number of hours.</li>      </ul>


## Examples

### Example #1 
Determine if the hour after the current system time is in the next two hours.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
