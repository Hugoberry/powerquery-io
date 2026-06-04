---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


表示這個日期是否發生在目前年度，而且在當天或之前 (由系統目前的日期和時間決定)。


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

表示指定的 datetime 值 `dateTime` 是否發生在目前年度，而且在當天或之前 (由系統目前的日期和時間決定)。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前系統時間是否在年初至今。
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
