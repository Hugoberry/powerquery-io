---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


表示這個日期是否發生在當週 (由系統目前的日期和時間決定)。


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

表示指定的 datetime 值 `dateTime` 是否發生在當週 (由系統目前的日期和時間決定)。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前系統時間是否在當週。
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
