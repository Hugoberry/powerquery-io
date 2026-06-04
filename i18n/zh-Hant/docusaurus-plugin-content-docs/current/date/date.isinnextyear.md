---
title: Date.IsInNextYear
---

# Date.IsInNextYear


指出此日期是否會在以目前系統日期和時間決定的下一年發生。請注意，傳遞會在當年發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInNextYear(
    dateTime as any
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的下一年發生。請注意，傳遞會在當年發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `date`、`datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前系統時間後一年是否在明年。
```powerquery
Date.IsInNextYear(Date.AddYears(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
