---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


指出此日期時間是否會在以目前系統日期和時間決定的前幾分鐘發生。請注意，傳遞會在目前分鐘發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上幾分鐘發生。請注意，傳遞會在目前分鐘發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>minutes</code>: 分鐘數。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間的前一分鐘是否在前兩分鐘中。
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
