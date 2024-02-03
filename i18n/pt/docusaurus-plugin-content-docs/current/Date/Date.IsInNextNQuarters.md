---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Indicates whether this date occurs during the next number of quarters, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current quarter.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Indicates whether the given datetime value <code>dateTime</code> occurs during the next number of quarters, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current quarter.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      <li><code>quarters</code>: The number of quarters.</li>      </ul>


## Examples

### Example #1 
Determine if the quarter after the current system time is in the next two quarters.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
