---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


システム上の現在の日時によって決定される次の週に、この date が含まれるかどうかを示します。この関数は、現在の週に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の週に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の週に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻より後の週が次の週に含まれるかどうかを調べます。
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
