---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

返回此持续时间跨越的总天数。


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

返回 <code>duration</code> 跨越的总天数。


## Examples

### Example #1 
查找持续时间值跨越的总天数。
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
