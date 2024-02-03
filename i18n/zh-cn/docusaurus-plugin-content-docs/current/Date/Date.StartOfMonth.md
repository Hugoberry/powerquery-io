---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

返回月开始值。


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

返回包含 <code>dateTime</code> 的月开始值。    <code>dateTime</code> 必须为<code>date</code>或<code>datetime</code>值。


## Examples

### Example #1 
查找 2011 年 10 月 10 日上午 8:10:32 的月开始值。
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
