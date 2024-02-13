---
title: Duration.TotalDays
---

# Duration.TotalDays


Returns the total days this duration spans.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Returns the total days spanned by <code>duration</code>.


## Examples

### Example #1 
Find the total days spanned by a duration value.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
