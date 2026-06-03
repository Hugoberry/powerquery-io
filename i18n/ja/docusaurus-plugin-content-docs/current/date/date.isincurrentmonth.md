---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


システム上の現在の日時によって決定される現在の月にこの日付が含まれるかどうかを示します。


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される現在の月に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。

-   `dateTime`: 評価される `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻が現在の月に含まれるかどうかを調べます。
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
