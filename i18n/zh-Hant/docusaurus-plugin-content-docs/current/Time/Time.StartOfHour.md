---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

傳回小時的開始時間。


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

傳回以 <code>dateTime</code> 代表的小時開始時間。    <code>dateTime</code> 必須是 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。


## Examples

### Example #1 
找出 2011 年 10 月 10 日上午 8:10:32 的小時開始時間。
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
