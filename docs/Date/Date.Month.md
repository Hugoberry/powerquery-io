---
title: Date.Month
---

# Date.Month


## Description

Returns the month component.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Returns the month component of the provided <code>datetime</code> value, <code>dateTime</code>.


## Examples

### Example #1 
Find the month in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
