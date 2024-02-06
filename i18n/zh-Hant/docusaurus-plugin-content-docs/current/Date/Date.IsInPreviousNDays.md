---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


指出此日期是否會在以目前系統日期和時間決定的上幾天發生。請注意，傳遞會在當天發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上幾天發生。請注意，傳遞會在當天發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>·<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>days</code>: 天數。</li>      </ul>


## Examples

### Example #1 
決定目前系統時間的前一天是否是之前的兩天。
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
