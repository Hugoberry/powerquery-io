---
title: Date.MonthName
---

# Date.MonthName


Returns the name of the month component.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Returns the name of the month component for the provided <code>date</code>. An optional <code>culture</code> may also be provided (for example, "en-US").


## Examples

### Example #1 
Get the month name.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
