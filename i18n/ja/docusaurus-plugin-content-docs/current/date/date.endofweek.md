---
title: Date.EndOfWeek
---

# Date.EndOfWeek


週の最後の日付を返します。


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

`dateTime` を含む週の最後の日を返します。 この関数は、省略可能な `Day` (`firstDayOfWeek`) を受け取って、この相対計算の週の最初の日として設定します。既定値は `Day.Sunday` です。

-   `dateTime`: 週の最後の日が計算される `date`、`datetime`、または `datetimezone` 値
-   `firstDayOfWeek`: *\[省略可能\]* 週の最初の日を表す `Day.Type` 値。指定できる値は、`Day.Sunday`、`Day.Monday`、`Day.Tuesday`、`Day.Wednesday`、`Day.Thursday`、`Day.Friday`、`Day.Saturday.` です。既定値は `Day.Sunday` です。


## Examples

### Example #1
5/14/2011 の週の終わりを取得します。
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
日曜を週の最初の日として、5/17/2011 05:00:00 PM -7:00 の週の終わりを取得します。
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
