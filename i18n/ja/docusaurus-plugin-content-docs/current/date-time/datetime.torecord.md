---
title: DateTime.ToRecord
---

# DateTime.ToRecord


datetime 値の部分を含むレコードを返します。


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

指定された datetime 値 (`dateTime`) の部分を含むレコードを返します。

-   `dateTime`: その部分のレコードが計算される `datetime` 値。


## Examples

### Example #1
`#datetime(2011, 12, 31, 11, 56, 2)` 値を、日付および時刻値を含むレコードに変換します。
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
