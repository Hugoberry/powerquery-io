---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


指出此日期是否會在以目前系統日期和時間決定的上幾月發生。請注意，傳遞會在當月發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的上幾月發生。請注意，傳遞會在當月發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。
-   `months`: 月數。


## Examples

### Example #1
決定目前系統時間的上一個月是否是之前的兩個月。
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
