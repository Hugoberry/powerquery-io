---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


出此日期時間是否會在以目前系統日期和時間決定的下小時發生。請注意，傳遞會在目前小時發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的下小時發生。請注意，傳遞會在目前小時發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前系統時間的後一小時是否在下一小時中。
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
