---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Indicates whether this date occurs during the next day, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current day.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the next day, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current day.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the day after the current system time is in the next day.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
