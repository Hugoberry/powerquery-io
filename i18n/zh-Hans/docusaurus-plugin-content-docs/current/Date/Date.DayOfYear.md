---
title: Date.DayOfYear
---

# Date.DayOfYear


返回表示一年中的日期的数值，该值介于 1 和 366 之间。


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

返回一个数值，该值在提供的 `date`、`datetime` 或 `datetimezone` 值 `dateTime` 中表示一年中的日期。


## Examples

### Example #1
2011 年 3 月 1 日，一年中的某一天。
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
