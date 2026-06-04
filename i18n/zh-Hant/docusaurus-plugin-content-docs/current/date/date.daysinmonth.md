---
title: Date.DaysInMonth
---

# Date.DaysInMonth


傳回 28 到 31 的數字，指出當月天數。


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

傳回 `date`、`datetime` 或 `datetimezone` 值 `dateTime` 中當月的天數。

-   `dateTime`: 要傳回當月天數的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
`#date(2011, 12, 01)` 所表示的 12 月的天數。
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
