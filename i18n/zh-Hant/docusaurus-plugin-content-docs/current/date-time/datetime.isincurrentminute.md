---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


指出這個 datetime 是否發生在目前的分鐘期間 (由系統目前的日期和時間判斷)。


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

指出指定的 datetime 值 `dateTime` 是否發生在目前的分鐘期間 (由系統目前的日期和時間判斷)。

-   `dateTime`: 要評估的 `datetime` 或 `datetimezone` 值。


## Examples

### Example #1
判斷目前的系統時間是否在目前的分鐘中。
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
