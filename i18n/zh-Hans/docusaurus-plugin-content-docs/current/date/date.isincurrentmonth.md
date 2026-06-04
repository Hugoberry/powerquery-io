---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


指示在当月中此日期是否出现，它由系统上的当前日期和时间确定。


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

指示在当月中给定的日期时间值 `dateTime` 是否出现，它由系统上的当前日期和时间确定。

-   `dateTime`: 要进行求值的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
确定当前系统时间是否处于当月。
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
