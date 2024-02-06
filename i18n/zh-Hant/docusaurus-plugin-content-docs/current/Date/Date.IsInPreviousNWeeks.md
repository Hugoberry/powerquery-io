---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


指出此日期是否會在以目前系統日期和時間決定的上幾週發生。請注意，傳遞會在當週發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上幾週發生。請注意，傳遞會在當天發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>weeks</code>: 週數。</li>      </ul>


## Examples

### Example #1 
決定目前系統時間的上一週是否是之前的兩週。
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
