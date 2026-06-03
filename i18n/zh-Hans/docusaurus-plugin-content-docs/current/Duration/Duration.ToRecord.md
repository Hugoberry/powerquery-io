---
title: Duration.ToRecord
---

# Duration.ToRecord


返回包含持续时间的各个部分的记录。


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

返回包含 duration 值 `duration` 的各个部分的记录。

-   `duration`: 从中创建记录的 `duration`。


## Examples

### Example #1
将 `#duration(2, 5, 55, 20)` 转换为包括天、小时、分钟和秒这些部分的记录(如果适用)。
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
