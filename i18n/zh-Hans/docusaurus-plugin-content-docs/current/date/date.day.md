---
title: Date.Day
---

# Date.Day


返回星期几部分。


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

返回 `date`、`datetime` 或 `datetimezone` 值的日部分。

-   `dateTime`: 要从其提取日部分的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
获取表示 5/14/2011 05:00:00 PM 的日期和时间的 `date`、`datetime` 或 `datetimezone` 值的日部分。
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
