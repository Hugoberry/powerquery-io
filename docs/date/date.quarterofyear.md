---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Returns a number indicating which quarter of the year the date falls in.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Returns a number from 1 to 4 indicating which quarter of the year the date <code>dateTime</code> falls in. <code>dateTime</code> can be a <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value.


## Examples

### Example #1 
Find which quarter of the year the date #date(2011, 12, 31) falls in.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
