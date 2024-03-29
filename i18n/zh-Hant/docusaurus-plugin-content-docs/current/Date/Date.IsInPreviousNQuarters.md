---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


指出此日期是否會在以目前系統日期和時間決定的上幾季發生。請注意，傳遞會在當季發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上幾季發生。請注意，傳遞會在當季發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>quarters</code>: 季數。</li>      </ul>


## Examples

### Example #1 
決定目前系統時間的上一個季度是否是之前的兩季。
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
