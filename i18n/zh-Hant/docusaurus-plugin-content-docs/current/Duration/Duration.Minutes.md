---
title: Duration.Minutes
---

# Duration.Minutes


傳回持續時間的分鐘數部分。


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

傳回 <code>duration</code> 的分鐘數部分。


## Examples

### Example #1 
從持續時間值擷取分鐘數。
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
