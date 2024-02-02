---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Returns the total hours this duration spans.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Returns the total hours spanned by <code>duration</code>.


## Examples

### Example #1 
Find the total hours spanned by a duration value.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
