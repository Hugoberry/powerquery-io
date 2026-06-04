---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


指出此日期是否會在以目前系統日期和時間決定的下幾天發生。請注意，傳遞會在當天發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的下幾天發生。請注意，傳遞會在當天發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。
-   `days`: 天數。


## Examples

### Example #1
決定目前系統時間的後一天是否是接下來的兩天。
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
