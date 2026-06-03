---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


システム上の現在の日時によって決定される前の週数に、この date が含まれるかどうかを示します。この関数は、現在の週に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の週数に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の週に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。
-   `weeks`: 週数。


## Examples

### Example #1
現在のシステム時刻より前の週が前の 2 週に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
