---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


システム上の現在の日時によって決定されるとおり、この日付が現在の年内に含まれていて、現在の日付以前であるかどうかを示します。


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定されるとおり、指定された datetime 値 `dateTime` が現在の年内に含まれていて、現在の日付以前であるかどうかを示します。

-   `dateTime`: 評価される `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻が過去 1 年に含まれるかどうかを調べます。
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
