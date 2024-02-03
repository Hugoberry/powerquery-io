---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

傳回 1 到 366 的數字，代表一年中的一天。


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

傳回數字，代表提供的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 是一年中的哪一天。


## Examples

### Example #1 
2011 年 3 月 1 日那一年中的一天。
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
