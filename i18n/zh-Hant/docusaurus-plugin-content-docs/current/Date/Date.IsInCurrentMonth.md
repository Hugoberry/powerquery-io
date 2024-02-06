---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


表示這個日期是否發生在當月 (由系統目前的日期和時間決定)。


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

表示指定的 datetime 值 <code>dateTime</code> 是否發生在當月 (由系統目前的日期和時間決定)。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間是否在當月。
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
