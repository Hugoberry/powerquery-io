---
title: Date.Year
---

# Date.Year


Returns the year component.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Returns the year component of the provided <code>datetime</code> value, <code>dateTime</code>.


## Examples

### Example #1 
Find the year in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
