---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

返回此持续时间跨越的总小时数。


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

返回 <code>duration</code> 跨越的总小时数。


## Examples

### Example #1 
查找持续时间值跨越的总小时数。
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
