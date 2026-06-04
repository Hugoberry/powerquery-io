---
title: Date.EndOfWeek
---

# Date.EndOfWeek


傳回週度結束時間。


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

傳回包含 `dateTime` 的週度結束時間。 這個函數可以接受選擇性的 `Day` `firstDayOfWeek`，以設定此相關計算中一週的第一天。預設值為 `Day.Sunday`。

-   `dateTime`: 要計算週度結束時間的 `date`、`datetime` 或 `datetimezone` 值
-   `firstDayOfWeek`: *(選用)* 代表一週第一天的 `Day.Type` 值。可能的值包括 `Day.Sunday`、`Day.Monday`、`Day.Tuesday`、`Day.Wednesday`、`Day.Thursday`、`Day.Friday` 和 `Day.Saturday`。預設值是 `Day.Sunday`。


## Examples

### Example #1
取得 5/14/2011 這一週的結尾。
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
取得 5/17/2011 05:00:00 PM -7:00 這一週的結尾，而且一週的第一天是星期日。
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
