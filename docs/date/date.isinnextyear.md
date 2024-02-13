---
title: Date.IsInNextYear
---

# Date.IsInNextYear


Indicates whether this date occurs during the next year, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current year.


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the next year, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current year.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the year after the current system time is in the next year.
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
