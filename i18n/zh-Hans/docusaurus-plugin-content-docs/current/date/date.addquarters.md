---
title: Date.AddQuarters
---

# Date.AddQuarters


将指定季度数添加到该日期。


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

通过将 `numberOfQuarters` 个季度添加到 `datetime` 值 `dateTime`，返回 `date`、`datetime` 或 `datetimezone` 结果。

-   `dateTime`: 季度数要添加到的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfQuarters`: 要添加的季度数。


## Examples

### Example #1
将 1 个季度添加到表示日期 5/14/2011 的 `date`、`datetime` 或 `datetimezone` 值。
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
