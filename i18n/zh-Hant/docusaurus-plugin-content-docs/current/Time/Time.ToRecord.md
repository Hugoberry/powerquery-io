---
title: Time.ToRecord
---

# Time.ToRecord


傳回一筆包含時間值各部分的記錄。


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

傳回記錄，內含指定的 time 值 `time` 各部分。

-   `time`: 要將其各部分計算成記錄的 `time` 值。


## Examples

### Example #1
將 `#time(11, 56, 2)` 值轉換成包含時間值的記錄。
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
