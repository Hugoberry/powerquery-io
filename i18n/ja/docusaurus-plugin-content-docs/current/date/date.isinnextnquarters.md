---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


システム上の現在の日時によって決定される次の四半期数に、この date が含まれるかどうかを示します。この関数は、現在の四半期に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の四半期数に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の四半期に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。
-   `quarters`: 四半期数。


## Examples

### Example #1
現在のシステム時刻より後の四半期が、次の 2 回の四半期に含まれるかどうかを調べます。
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
