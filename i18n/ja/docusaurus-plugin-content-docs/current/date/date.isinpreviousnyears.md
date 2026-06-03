---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


システム上の現在の日時によって決定される前の年数に、この date が含まれるかどうかを示します。この関数は、現在の年に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の年数に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の年に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `date`、`datetime` または `datetimezone` 値。
-   `years`: 年数。


## Examples

### Example #1
現在のシステム時刻より前の年が前の 2 年に含まれるかどうかを調べます。
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
