---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Indicates whether this date occurs during the previous number of years, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current year.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indicates whether the given datetime value <code>dateTime</code> occurs during the previous number of years, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current year.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      <li><code>years</code>: The number of years.</li>      </ul>


## Examples

### Example #1 
Determine if the year before the current system time is in the previous two years.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
