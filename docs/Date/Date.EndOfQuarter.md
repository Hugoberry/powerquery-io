---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Returns the end of the quarter.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Returns the end of the quarter that contains <code>dateTime</code>. Time zone information is preserved.      <ul>      <li><code>dateTime</code>: A <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value from which the end of the quarter is calculated.</li>      </ul>


## Examples

### Example #1 
Find the end of the quarter for October 10th, 2011, 8:00AM.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
