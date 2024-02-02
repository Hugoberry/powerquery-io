---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


## Description

Indicates whether this datetime occurs during the next second, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current second.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Details

Indicates whether the given datetime value <code>dateTime</code> occurs during the next second, as determined by the current date and time on the system. Note that this function will return false when passed a value that occurs within the current second.      <ul>      <li><code>dateTime</code>: A <code>datetime</code>, or <code>datetimezone</code> value to be evaluated.</li>      </ul>


## Examples

### Example #1 
Determine if the second after the current system time is in the next second.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
