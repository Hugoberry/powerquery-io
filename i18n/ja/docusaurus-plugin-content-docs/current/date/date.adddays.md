---
title: Date.AddDays
---

# Date.AddDays


指定された日を日付に追加します。


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

`datetime` 値 `dateTime` に `numberOfDays` 日を追加した結果の `date`、`datetime`、または `datetimezone` を返します。

-   `dateTime`: 日が追加される `date`、`datetime`、または `datetimezone` 値。
-   `numberOfDays`: 追加する日数。


## Examples

### Example #1
日付 5/14/2011 を表す `date`、`datetime`、または `datetimezone` 値に 5 日を追加します。
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
