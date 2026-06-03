---
title: Date.AddWeeks
---

# Date.AddWeeks


将指定星期数添加到该日期。


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

通过将 `numberOfWeeks` 个星期添加到 `datetime` 值 `dateTime`，返回 `date`、`datetime` 或 `datetimezone` 结果。

-   `dateTime`: 星期数要添加到的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfWeeks`: 要添加的星期数。


## Examples

### Example #1
将 2 个星期添加到表示日期 5/14/2011 的 `date`、`datetime` 或 `datetimezone` 值。
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
