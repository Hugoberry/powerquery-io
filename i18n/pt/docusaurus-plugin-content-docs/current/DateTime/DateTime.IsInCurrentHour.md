---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Indicates whether this datetime occurs during the current hour, as determined by the current date and time on the system.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Indicates whether the given datetime value <code>dateTime</code> occurs during the current hour, as determined by the current date and time on the system.      <ul>      <li><code>dateTime</code>: A <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the current system time is in the current hour.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
