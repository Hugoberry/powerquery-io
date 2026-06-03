---
title: Date.DayOfWeek
---

# Date.DayOfWeek


返回数字(介于 0 和 6 之间)，以指明提供的值是星期几。


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

返回数字(介于 0 和 6 之间)，以指明提供的 `dateTime` 是星期几。

-   `dateTime`: `date`、`datetime` 或 `datetimezone` 值。
-   `firstDayOfWeek`: `Day` 值，指明应将哪一天视为一周的第一天。可取值为 Day.Sunday、Day.Monday、Day.Tuesday、Day.Wednesday、Day.Thursday、Day.Friday 或 Day.Saturday。如果未指定，使用的是依赖区域性的默认值。


## Examples

### Example #1
获取 2011 年 2 月 21 日(星期一)代表的是星期几(将星期日视为一周的第一天)。
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
获取 2011 年 2 月 21 日(星期一)代表的是星期几(将星期一视为一周的第一天)。
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
