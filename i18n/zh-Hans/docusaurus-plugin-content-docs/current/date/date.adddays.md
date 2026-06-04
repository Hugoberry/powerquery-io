---
title: Date.AddDays
---

# Date.AddDays


将指定天数添加到该日期。


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

通过将 `numberOfDays` 天添加到 `datetime` 值 `dateTime`，返回 `date`、`datetime` 或 `datetimezone` 结果。

-   `dateTime`: 天数要添加到的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfDays`: 要添加的天数。


## Examples

### Example #1
将 5 天添加到表示日期 5/14/2011 的 `date`、`datetime` 或 `datetimezone` 值。
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
