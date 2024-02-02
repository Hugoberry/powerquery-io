---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Indicates whether this date occurs during the next month, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current month.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Indicates whether the given datetime value <code>dateTime</code> occurs during the next month, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current month.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the month after the current system time is in the next month.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
