---
title: Date.DaysInMonth
---

# Date.DaysInMonth


返回指示一个月中的天数的数值，该值介于 28 和 31 之间。


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

返回 `date`、`datetime` 或 `datetimezone` 值 `dateTime` 中一个月的天数。

-   `dateTime`: 为其返回月份中的天数的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
由 `#date(2011, 12, 01)>` 表示的十二月的天数。
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
