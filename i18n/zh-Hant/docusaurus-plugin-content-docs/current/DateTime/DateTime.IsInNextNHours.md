---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


指出此日期時間是否會在以目前系統日期和時間決定的下幾小時發生。請注意，傳遞會在目前小時發生的值時，此函式會傳回 false。


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

指出指定的日期時間值 <code>dateTime</code> 是否會在以目前系統日期和時間決定的下幾小時發生。請注意，傳遞會在目前小時發生的值時，此函式會傳回 false。      <ul>      <li><code>dateTime</code>: 要評估的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>hours</code>: 小時數。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間的後一小時是否在接下來的兩小時中。
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
