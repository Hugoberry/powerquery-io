---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

傳回該日的開始時間。


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

傳回以 <code>dateTime</code> 代表的每日開始時間。    <code>dateTime</code> 必須是 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。


## Examples

### Example #1 
找出 2011 年 10 月 10 日上午 8:00 當日的開始時間。
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
