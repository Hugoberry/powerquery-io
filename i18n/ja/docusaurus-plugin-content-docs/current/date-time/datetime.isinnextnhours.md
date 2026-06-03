---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


システム上の現在の日時によって決定される次の時間数に、この datetime が含まれるかどうかを示します。この関数は、現在の 1 時間に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

システム上の現在の日時によって決定される次の時間数に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の 1 時間に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `datetime` または `datetimezone` 値。
-   `hours`: 時間数。


## Examples

### Example #1
現在のシステム時刻の次の時間が、次の 2 時間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
