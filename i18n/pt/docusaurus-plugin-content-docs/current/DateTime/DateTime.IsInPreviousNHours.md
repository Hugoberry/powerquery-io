---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Indicates whether this datetime occurs during the previous number of hours, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current hour.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Indicates whether the given datetime value <code>dateTime</code> occurs during the previous number of hours, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current hour.      <ul>      <li><code>dateTime</code>: A <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      <li><code>hours</code>: The number of hours.</li>      </ul>


## Examples

### Example #1 
Determine if the hour before the current system time is in the previous two hours.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
