---
title: Date.EndOfMonth
---

# Date.EndOfMonth


月の最後の日付を返します。


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

`dateTime` を含む月の最後の日付を返します。

-   `dateTime`: 月の終わりを計算する `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
5/14/2011 の月の終わりを取得します。
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2
5/17/2011 05:00:00 PM -7:00 の月の終わりを取得します。
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
