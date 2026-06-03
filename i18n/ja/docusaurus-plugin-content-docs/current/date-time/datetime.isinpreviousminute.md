---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


システム上の現在の日時によって決定される前の 1 分間に、この datetime が含まれるかどうかを示します。この関数は、現在の 1 分間に含まれる値が渡された場合は false を返すことに注意してください。


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される前の 1 分間に、指定された datetime 値 `dateTime` が含まれるかどうかを示します。この関数は、現在の 1 分間に含まれる値が渡された場合は false を返すことに注意してください。

-   `dateTime`: 評価される `datetime` または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻の前の分が前の 1 分間に含まれるかどうかを調べます。
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
