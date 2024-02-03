---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

指出此日期是否會在以目前系統日期和時間決定的上幾月發生。請注意，傳遞會在當月發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上幾月發生。請注意，傳遞會在當月發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>months</code>: 月數。</li>      </ul>


## Examples

### Example #1 
決定目前系統時間的上一個月是否是之前的兩個月。
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
