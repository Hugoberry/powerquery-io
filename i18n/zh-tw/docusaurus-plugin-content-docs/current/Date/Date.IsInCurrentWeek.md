---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

表示這個日期是否發生在當週 (由系統目前的日期和時間決定)。


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

表示指定的 datetime 值 <code>dateTime</code> 是否發生在當週 (由系統目前的日期和時間決定)。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間是否在當週。
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date