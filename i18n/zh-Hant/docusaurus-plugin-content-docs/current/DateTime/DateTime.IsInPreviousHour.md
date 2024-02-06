---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


指出此日期時間是否會在以目前系統日期和時間決定的上小時發生。請注意，傳遞會在目前小時發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上小時發生。請注意，傳遞會在目前小時發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間的前一小時是否在前一小時中。
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
