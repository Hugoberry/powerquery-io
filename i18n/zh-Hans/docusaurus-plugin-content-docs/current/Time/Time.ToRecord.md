---
title: Time.ToRecord
---

# Time.ToRecord


返回包含时间值的各个部分的记录。


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

返回包含给定时间值 `time` 的各个部分的记录。

-   `time`: 要从中计算其各个部分的记录的 `time` 值。


## Examples

### Example #1
将 `#time(11, 56, 2)` 值转换为包含时间值的记录。
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
