---
title: Time.ToRecord
---

# Time.ToRecord


時刻値の部分を含むレコードを返します。


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

指定された Time 値 (`time`) の部分を含むレコードを返します。

-   `time`: その部分のレコードが計算される `time` 値。


## Examples

### Example #1
`#time(11, 56, 2)` 値を、時刻値を含むレコードに変換します。
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
