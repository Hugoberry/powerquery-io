---
title: Date.EndOfWeek
---

# Date.EndOfWeek


返回周结束值。


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

返回包含 `dateTime` 的周结束值。 此函数取可选的 `Day` `firstDayOfWeek`，从而设置为此相对计算的一周的第一天。默认值为 `Day.Sunday`。

-   `dateTime`: 从中计算星期的最后一天的 `date`、`datetime` 或 `datetimezone` 值
-   `firstDayOfWeek`: *(可选)* 表示星期的第一天的 `Day.Type` 值。可能值为 `Day.Sunday`、`Day.Monday`、`Day.Tuesday`、`Day.Wednesday`、`Day.Thursday`、`Day.Friday` 和 `Day.Saturday`。默认值为 `Day.Sunday`。


## Examples

### Example #1
获取 5/14/2011 的星期结束值。
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
获取 5/17/2011 05:00:00 PM -7:00 的星期结束值，Sunday 作为该星期的第一天。
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
