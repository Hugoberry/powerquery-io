---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Indicates whether this date occurs during the next quarter, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current quarter.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the next quarter, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current quarter.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the quarter after the current system time is in the next quarter.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
