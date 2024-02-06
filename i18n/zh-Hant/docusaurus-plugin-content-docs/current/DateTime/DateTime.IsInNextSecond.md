---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


指出此日期時間是否會在以目前系統日期和時間決定的下一秒發生。請注意，傳遞會在目前秒發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的下一秒發生。請注意，傳遞會在當秒發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間的後一秒是否在下一秒中。
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
