---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Indicates whether this date occurs during the previous number of months, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current month.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the previous number of months, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current month.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      <li><code>months</code>: The number of months.</li>      </ul>


## Examples

### Example #1 
Determine if the month before the current system time is in the previous two months.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
