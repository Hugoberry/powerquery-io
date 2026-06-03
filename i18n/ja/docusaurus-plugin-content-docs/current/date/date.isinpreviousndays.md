---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


システム上の現在の日時によって決定される前の日数に、この date が含まれるかどうかを示します。この関数は、現在の日付に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の日数に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の日付に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。
-   `days`: 日数。


## Examples

### Example #1
現在のシステム時刻より前の日付が前の 2 日に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
