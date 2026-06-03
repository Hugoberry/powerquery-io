---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


システム上の現在の日時によって決定される現在の年にこの日付が含まれるかどうかを示します。


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される現在の年に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。

-   `dateTime`: 評価される `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻が現在の年に含まれるかどうかを調べます。
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
