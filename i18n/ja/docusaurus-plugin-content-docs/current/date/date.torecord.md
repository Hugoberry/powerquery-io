---
title: Date.ToRecord
---

# Date.ToRecord


日付値の部分を含むレコードを返します。


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

指定された date 値 (`date`) の部分を含むレコードを返します。

-   `date`: その部分のレコードが計算される `date` 値。


## Examples

### Example #1
`#date(2011, 12, 31)` 値を、日付値の部分を含むレコードに変換します。
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
