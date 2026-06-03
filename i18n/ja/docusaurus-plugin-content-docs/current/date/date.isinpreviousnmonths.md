---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


システム上の現在の日時によって決定される前の月数に、この date が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の月数に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。
-   `months`: 月数。


## Examples

### Example #1
現在のシステム時刻より前の月が前の 2 か月に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
