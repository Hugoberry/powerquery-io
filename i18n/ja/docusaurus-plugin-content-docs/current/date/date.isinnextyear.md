---
title: Date.IsInNextYear
---

# Date.IsInNextYear


システム上の現在の日時によって決定される次の年に、この date が含まれるかどうかを示します。この関数は、現在の年に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の年に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の年に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻より後の年が次の年に含まれるかどうかを調べます。
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
