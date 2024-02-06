---
title: Duration.Minutes
---

# Duration.Minutes


返回持续时间的分钟数部分。


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

返回 <code>duration</code> 的分钟数部分。


## Examples

### Example #1 
从持续时间值中提取分钟数。
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
