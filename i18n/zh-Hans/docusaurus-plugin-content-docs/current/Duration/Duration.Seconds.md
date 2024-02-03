---
title: Duration.Seconds
---

# Duration.Seconds


## Description

返回持续时间的秒数部分。


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

返回 <code>duration</code> 的秒数部分。


## Examples

### Example #1 
从持续时间值中提取秒数。
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
