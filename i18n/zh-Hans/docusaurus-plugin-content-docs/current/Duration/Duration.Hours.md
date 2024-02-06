---
title: Duration.Hours
---

# Duration.Hours


返回持续时间的小时数部分。


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

返回 <code>duration</code> 的小时数部分。


## Examples

### Example #1 
从持续时间值中提取小时数。
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
