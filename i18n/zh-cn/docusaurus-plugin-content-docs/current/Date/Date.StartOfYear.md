---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

返回年开始值。


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

返回包含 <code>dateTime</code> 的年开始值。    <code>dateTime</code> 必须是 <code>date</code>、<code>datetime</code>或<code>datetimezone</code>值。


## Examples

### Example #1 
查找 2011 年 10 月 10 日上午 8:10:32 的年开始值。
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date