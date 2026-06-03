---
title: Date.AddMonths
---

# Date.AddMonths


指定された月を日付に追加します。


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

`datetime` 値 `dateTime` に `numberOfMonths` か月を追加した結果の `date`、`datetime`、または `datetimezone` を返します。

-   `dateTime`: 月が追加される `date`、`datetime`、または `datetimezone` 値。
-   `numberOfMonths`: 追加する月の数。


## Examples

### Example #1
日付 5/14/2011 を表す `date`、`datetime`、または `datetimezone` 値に 5 か月を追加します。
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
日付と時刻 5/14/2011 08:15:22 AM を表す `date`、`datetime`、または `datetimezone` 値に 18 か月を追加します。
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
