---
title: Date.StartOfYear
---

# Date.StartOfYear


傳回年度開始時間。


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

傳回包含 `dateTime` 的年度開始時間。 `dateTime` 必須是 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
找出 2011 年 10 月 10 日上午 8:10:32 的年度開始時間。
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
