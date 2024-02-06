---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Returns the start of the quarter.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Returns the start of the quarter that contains <code>dateTime</code>.      <code>dateTime</code> must be a <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value.


## Examples

### Example #1 
Find the start of the quarter for October 10th, 2011, 8:00AM.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
