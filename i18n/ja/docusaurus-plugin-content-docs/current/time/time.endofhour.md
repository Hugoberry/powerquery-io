---
title: Time.EndOfHour
---

# Time.EndOfHour


時間の始まりを返します。


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

`dateTime` で表される時間の終わりを、小数秒も含めて返します。タイム ゾーン情報は保持されます。

-   `dateTime`: 時間の終わりを計算する `time`、`datetime`、または `datetimezone` 値。


## Examples

### Example #1
5/14/2011 05:00:00 PM の時間の終わりを取得します。
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
5/17/2011 05:00:00 PM -7:00 の時間の終わりを取得します。
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
