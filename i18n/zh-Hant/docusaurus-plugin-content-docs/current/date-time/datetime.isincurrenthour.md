---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


指出這個 datetime 是否發生在目前的小時期間 (由系統目前的日期和時間判斷)。


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

指出指定的 datetime 值 `dateTime` 是否發生在目前的小時期間 (由系統目前的日期和時間判斷)。

-   `dateTime`: 要評估的 `datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前的系統時間是否在目前的小時中。
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
