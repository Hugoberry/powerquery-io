---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

指示在当前年份中该日期是否出现以及该日期是否就在当天或早于当天，它由系统上的当前日期和时间确定。


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

指示在当前年份中给定日期时间值 <code>dateTime</code> 是否出现以及该日期时间值是否就在当天或早于当天，它由系统上的当前日期和时间确定。      <ul>      <li><code>dateTime</code>: 要进行求值的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间是否处于本年度截至现在的日期内。
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
