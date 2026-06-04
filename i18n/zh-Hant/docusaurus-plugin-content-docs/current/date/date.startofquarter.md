---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


傳回季度開始時間。


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

傳回以 `dateTime` 代表的季度開始時間的值。 `dateTime` 必須是 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
找出 2011 年 10 月 10 日上午 8:00 的季度開始時間。
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
