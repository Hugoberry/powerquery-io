---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


返回此持续时间跨越的总秒数。


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

返回 <code>duration</code> 跨越的总秒数。


## Examples

### Example #1 
查找持续时间值跨越的总秒数。
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
