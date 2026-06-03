---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


システム上の現在の日時によって決定される現在の四半期にこの日付が含まれるかどうかを示します。


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される現在の四半期に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。

-   `dateTime`: 評価される `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻が現在の四半期に含まれるかどうかを調べます。
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
