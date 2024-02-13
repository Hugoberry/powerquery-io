---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Returns the total seconds this duration spans.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Returns the total seconds spanned by <code>duration</code>.


## Examples

### Example #1 
Find the total seconds spanned by a duration value.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
