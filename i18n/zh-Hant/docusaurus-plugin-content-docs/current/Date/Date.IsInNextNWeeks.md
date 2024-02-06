---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


指出此日期是否會在以目前系統日期和時間決定的下幾週發生。請注意，傳遞會在當週發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的下幾週發生。請注意，傳遞會在當週發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>weeks</code>: 週數。</li>      </ul>


## Examples

### Example #1 
決定目前系統時間的下一週是否是接下來的兩週。
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
