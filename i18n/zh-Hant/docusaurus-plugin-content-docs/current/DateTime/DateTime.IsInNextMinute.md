---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

指出此日期時間是否會在以目前系統日期和時間決定的下分鐘發生。請注意，傳遞會在目前分鐘發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的下分鐘發生。請注意，傳遞會在目前分鐘發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間的後一分鐘是否在下一分鐘中。
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime