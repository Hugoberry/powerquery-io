---
title: Date.EndOfYear
---

# Date.EndOfYear


年の最後の日付を返します。


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Remarks

`dateTime` を含む年の最後の日付を、小数秒も含めて返します。タイム ゾーン情報は保持されます。

-   `dateTime`: 年の終わりを計算する `date`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
5/14/2011 05:00:00 PM の年の終わりを取得します。
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2
5/17/2011 05:00:00 PM -7:00 の時間の終わりを取得します。
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
