---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


指出此日期是否會在以目前系統日期和時間決定的上一天發生。請注意，傳遞會在當天發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上一天發生。請注意，傳遞會在當天發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間前一日是否在前一日。
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
