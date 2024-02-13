---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Indicates whether this date occurs during the previous day, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current day.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the previous day, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current day.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the day before the current system time is in the previous day.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
