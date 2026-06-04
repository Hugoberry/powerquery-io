---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


指出此日期是否會在以目前系統日期和時間決定的下幾年發生。請注意，傳遞會在當年發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的下幾年發生。請注意，傳遞會在當年發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。
-   `years`: 年數。


## Examples

### Example #1
決定目前系統時間的次年是否是接下來的兩年。
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
