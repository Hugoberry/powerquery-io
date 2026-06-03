---
title: Date.AddMonths
---

# Date.AddMonths


将指定月份数添加到该日期。


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

通过将 `numberOfMonths` 个月添加到 `datetime` 值 `dateTime`，返回 `date`、`datetime` 或 `datetimezone` 结果。

-   `dateTime`: 要将月份数添加到其中的 `date`、`datetime` 或 `datetimezone` 值。
-   `numberOfMonths`: 要添加的月份数。


## Examples

### Example #1
将 5 个月添加到表示日期 5/14/2011 的 `date`、`datetime` 或 `datetimezone` 值。
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
将 18 个月添加到表示日期和时间 5/14/2011 08:15:22 AM 的 `date`、`datetime` 或 `datetimezone` 值。
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
