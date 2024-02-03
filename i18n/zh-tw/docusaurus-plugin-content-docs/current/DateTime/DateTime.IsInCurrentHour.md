---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

指出這個 datetime 是否發生在目前的小時期間 (由系統目前的日期和時間判斷)。


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

指出指定的 datetime 值 <code>dateTime</code> 是否發生在目前的小時期間 (由系統目前的日期和時間判斷)。      <ul>      <li><code>dateTime</code>: 要評估的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前的系統時間是否在目前的小時中。
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
