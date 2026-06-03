---
title: Date.AddWeeks
---

# Date.AddWeeks


指定された週を日付に追加します。


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

`datetime` 値 `dateTime` に `numberOfWeeks` 週間を追加した結果の `date`、`datetime`、または `datetimezone` を返します。

-   `dateTime`: 週が追加される `date`、`datetime`、または `datetimezone` 値。
-   `numberOfWeeks`: 追加する週の数。


## Examples

### Example #1
日付 5/14/2011 を表す `date`、`datetime`、または `datetimezone` 値に 2 週間を追加します。
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
