---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


システム上の現在の日時によって決定される次の月数に、この date が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の月数に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の月に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。
-   `months`: 月の数。


## Examples

### Example #1
現在のシステム時刻より後の月が、次の 2 か月間に含まれるかどうかを調べます。
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
