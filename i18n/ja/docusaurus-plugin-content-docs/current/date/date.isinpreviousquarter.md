---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


システム上の現在の日時によって決定される前の四半期に、この date が含まれるかどうかを示します。この関数は、現在の四半期に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の四半期に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の四半期に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻より前の四半期が前の四半期に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
