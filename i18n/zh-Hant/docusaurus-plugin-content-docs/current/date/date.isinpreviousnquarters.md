---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


指出此日期是否會在以目前系統日期和時間決定的上幾季發生。請注意，傳遞會在當季發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的上幾季發生。請注意，傳遞會在當季發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。
-   `quarters`: 季數。


## Examples

### Example #1
決定目前系統時間的上一個季度是否是之前的兩季。
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
