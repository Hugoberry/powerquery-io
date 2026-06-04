---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


指出此日期是否會在以目前系統日期和時間決定的下幾月發生。請注意，傳遞會在當月發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的下幾月發生。請注意，傳遞會在當月發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。
-   `months`: 月數。


## Examples

### Example #1
決定目前系統時間的次月是否是接下來的兩個月。
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
