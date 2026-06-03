---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


システム上の現在の日時によって決定される前の日に、この date が含まれるかどうかを示します。この関数は、現在の日付に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の日に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の日付に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻より前の日付が前の日に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
