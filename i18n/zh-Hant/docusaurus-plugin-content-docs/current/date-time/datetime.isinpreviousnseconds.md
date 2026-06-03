---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


指出此日期時間是否會在以目前系統日期和時間決定的前幾秒發生。請注意，傳遞會在目前秒發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

指出指定的日期時間值 `dateTime` 是否會在以目前系統日期和時間決定的上幾秒發生。請注意，傳遞會在目前秒發生的值時，此函式會傳回 false。

-   `dateTime`: 要評估的 `datetime` 或 `datetimezone` 值。
-   `seconds`: 秒數。


## Examples

### Example #1
判斷目前系統時間的前一秒是否在前兩秒中。
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
