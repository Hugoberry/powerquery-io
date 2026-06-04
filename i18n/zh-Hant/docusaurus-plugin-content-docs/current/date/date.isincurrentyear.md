---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


表示這個日期是否發生在目前年度 (由系統目前的日期和時間決定)。


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

表示指定的 datetime 值 `dateTime` 是否發生在目前年度 (由系統目前的日期和時間決定)。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前系統時間是否在目前年度。
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
