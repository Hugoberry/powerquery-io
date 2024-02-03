---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

表示這個日期是否發生在目前年度，而且在當天或之前 (由系統目前的日期和時間決定)。


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

表示指定的 datetime 值 <code>dateTime</code> 是否發生在目前年度，而且在當天或之前 (由系統目前的日期和時間決定)。      <ul>      <li><code>dateTime</code>: 要評估的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
判斷目前系統時間是否在年初至今。
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
