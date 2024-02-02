---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Returns the total minutes this duration spans.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Returns the total minutes spanned by <code>duration</code>.


## Examples

### Example #1 
Find the total minutes spanned by a duration value.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
