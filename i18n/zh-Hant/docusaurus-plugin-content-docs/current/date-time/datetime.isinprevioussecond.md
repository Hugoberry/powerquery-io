---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


指出此日期時間是否會在以目前系統日期和時間決定的上一秒發生。請注意，傳遞會在目前秒發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的上幾秒發生。請注意，傳遞會在目前秒發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前系統時間的前一秒是否在前一秒中。
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
