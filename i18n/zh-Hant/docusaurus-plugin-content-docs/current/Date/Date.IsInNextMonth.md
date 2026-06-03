---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


指出此日期是否會在以目前系統日期和時間決定的下一月發生。請注意，傳遞會在當月發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的下一月發生。請注意，傳遞會在當月發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前系統時間後一個月是否在下個月。
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
