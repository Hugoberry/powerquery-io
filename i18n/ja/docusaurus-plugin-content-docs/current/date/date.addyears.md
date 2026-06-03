---
title: Date.AddYears
---

# Date.AddYears


指定された年を日付に追加します。


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

`datetime` 値 `dateTime` に `numberOfYears` を追加した結果の `date`、`datetime`、または `datetimezone` を返します。

-   `dateTime`: 年が追加される `date`、`datetime`、または `datetimezone` 値。
-   `numberOfYears`: 追加する年の数。


## Examples

### Example #1
日付 5/14/2011 を表す `date`、`datetime`、または `datetimezone` 値に 4 年を追加します。
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
日付と時刻 5/14/2011 08:15:22 AM を表す `date`、`datetime`、または `datetimezone` 値に 10 年を追加します。
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
