---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


システム上の現在の日時によって決定される前の月に、この date が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の月に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻より前の月が前の月に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
