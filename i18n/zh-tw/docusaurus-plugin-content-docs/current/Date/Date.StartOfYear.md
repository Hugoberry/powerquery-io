---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

傳回年度開始時間。


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

傳回包含 <code>dateTime</code> 的年度開始時間。    <code>dateTime</code> 必須是 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。


## Examples

### Example #1 
找出 2011 年 10 月 10 日上午 8:10:32 的年度開始時間。
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
