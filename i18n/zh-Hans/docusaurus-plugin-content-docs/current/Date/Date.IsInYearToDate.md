---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


指示在当前年份中该日期是否出现以及该日期是否就在当天或早于当天，它由系统上的当前日期和时间确定。


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

指示在当前年份中给定日期时间值 `dateTime` 是否出现以及该日期时间值是否就在当天或早于当天，它由系统上的当前日期和时间确定。

-   `dateTime`: 要进行求值的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间是否处于本年度截至现在的日期内。
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
