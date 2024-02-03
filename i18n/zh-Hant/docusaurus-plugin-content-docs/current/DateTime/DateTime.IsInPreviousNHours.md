---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

指出此日期時間是否會在以目前系統日期和時間決定的前幾小時發生。請注意，傳遞會在目前小時發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的上幾小時發生。請注意，傳遞會在目前小時發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>hours</code>: 小時數。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間的前一小時是否在前兩小時中。
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
