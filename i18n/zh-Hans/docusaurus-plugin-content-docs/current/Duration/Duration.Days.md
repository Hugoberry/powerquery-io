---
title: Duration.Days
---

# Duration.Days


## Description

返回持续时间的天数部分。


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

返回 <code>duration</code> 的天数部分。


## Examples

### Example #1 
提取两个日期之间的天数。
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
