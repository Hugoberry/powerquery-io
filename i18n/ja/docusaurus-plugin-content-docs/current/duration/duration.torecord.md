---
title: Duration.ToRecord
---

# Duration.ToRecord


期間の部分を含むレコードを返します。


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

duration 値 `duration` の部分を含むレコードを返します。

-   `duration`: レコードの作成元になる `duration`。


## Examples

### Example #1
`#duration(2, 5, 55, 20)` を、その部分のレコードに変換します。これには、日、時間、分、および秒が含まれます (該当する場合)。
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
