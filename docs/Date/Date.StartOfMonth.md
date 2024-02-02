---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Returns the start of the month.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Returns the start of the month that contains <code>dateTime</code>.    <code>dateTime</code> must be a <code>date</code> or <code>datetime</code> value.


## Examples

### Example #1 
Find the start of the month for October 10th, 2011, 8:10:32AM.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
