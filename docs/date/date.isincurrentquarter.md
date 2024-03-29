---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Indicates whether this date occurs during the current quarter, as determined by the current date and time on the system.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the current quarter, as determined by the current date and time on the system.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the current system time is in the current quarter.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
