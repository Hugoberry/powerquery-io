---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


システム上の現在の日時によって決定される現在の秒に、この datetime が含まれるかどうかを示します。


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

システム上の現在の日時によって決定される現在の秒に、指定された datetime の値 `dateTime` が含まれるかどうかを示します。

-   `dateTime`: 評価する `datetime` または `datetimezone` 値。


## Examples

### Example #1
現在のシステム時刻が現在の秒に含まれるかどうかを調べます。
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
