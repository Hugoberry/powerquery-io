---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Indicates whether this date occurs during the previous week, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current week.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the previous week, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current week.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the week before the current system time is in the previous week.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
