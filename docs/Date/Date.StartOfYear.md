---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

Returns the start of the year.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

Returns the start of the year that contains <code>dateTime</code>.    <code>dateTime</code> must be a <code>date</code>, <code>datetime</code>, or <code>datetimezone</code> value.


## Examples

### Example #1 
Find the start of the year for October 10th, 2011, 8:10:32AM.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
