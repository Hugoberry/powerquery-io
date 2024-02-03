---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

指出此日期是否會在以目前系統日期和時間決定的上一季發生。請注意，傳遞會在當季發生的值時，此函式會傳回 false。


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上幾季發生。請注意，傳遞會在當季發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間前一季是否在上一季。
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
