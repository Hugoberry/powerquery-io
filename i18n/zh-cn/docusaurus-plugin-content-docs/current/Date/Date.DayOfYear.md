---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

返回表示一年中的日期的数值，该值介于 1 和 366 之间。


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

返回一个数值，该值在提供的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 中表示一年中的日期。


## Examples

### Example #1 
2011 年 3 月 1 日，一年中的某一天。
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
