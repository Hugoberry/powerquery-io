---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


返回此持续时间跨越的总分钟数。


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

返回 <code>duration</code> 跨越的总分钟数。


## Examples

### Example #1 
查找持续时间值跨越的总分钟数。
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
