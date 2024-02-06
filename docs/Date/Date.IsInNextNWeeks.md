---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Indicates whether this date occurs during the next number of weeks, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current week.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the next number of weeks, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current week.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      <li><code>weeks</code>: The number of weeks.</li>      </ul>


## Examples

### Example #1 
Determine if the week after the current system time is in the next two weeks.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
