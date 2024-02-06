---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


指出此日期時間是否會在以目前系統日期和時間決定的下幾秒發生。請注意，傳遞會在目前秒發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的下幾秒發生。請注意，傳遞會在目前秒數發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>seconds</code>: 秒數。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間的後一秒是否在接下來的兩秒中。
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
