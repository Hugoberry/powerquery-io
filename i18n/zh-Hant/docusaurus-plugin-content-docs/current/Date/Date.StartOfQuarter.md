---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

傳回季度開始時間。


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

傳回以 <code>dateTime</code> 代表的季度開始時間的值。    <code>dateTime</code> 必須是 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。


## Examples

### Example #1 
找出 2011 年 10 月 10 日上午 8:00 的季度開始時間。
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
