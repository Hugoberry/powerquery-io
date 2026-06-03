---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


指出此日期是否會在以目前系統日期和時間決定的上幾年發生。請注意，傳遞會在當年發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的上幾年發生。請注意，傳遞會在當年發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。
-   `years`: 年數。


## Examples

### Example #1
決定目前系統時間的前一年是否是之前的兩年。
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
