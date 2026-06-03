---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


システム上の現在の日時によって決定される現在の日付にこの日付が含まれるかどうかを示します。


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される現在の日付に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。

-   `dateTime`: 評価される `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻が現在の日付に含まれるかどうかを調べます。
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
