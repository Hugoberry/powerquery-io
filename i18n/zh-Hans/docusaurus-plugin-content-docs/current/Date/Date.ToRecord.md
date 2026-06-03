---
title: Date.ToRecord
---

# Date.ToRecord


返回包含日期值的各个部分的记录。


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

返回包含给定日期值 `date` 的各个部分的记录。

-   `date`: 要从中计算其各个部分的记录的 `date` 值。


## Examples

### Example #1
将 `#date(2011, 12, 31)` 值转换为包含日期值的各个部分的记录。
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
