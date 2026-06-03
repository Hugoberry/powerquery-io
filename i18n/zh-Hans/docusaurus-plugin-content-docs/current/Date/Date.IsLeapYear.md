---
title: Date.IsLeapYear
---

# Date.IsLeapYear


指示此日期是否处于闰年中。


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 `dateTime` 是否处于闰年。

-   `dateTime`: 要进行求值的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定由 `#date(2012, 01, 01)` 表示的 2012 年是否为闰年。
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
