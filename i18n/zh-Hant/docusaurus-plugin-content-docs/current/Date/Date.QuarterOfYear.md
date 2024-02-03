---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

傳回數字，指出日期落在目前年度的哪一個季度。


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

傳回 1 到 4 的數字，指出日期 <code>dateTime</code> 落在目前年度的哪一個季度。<code>dateTime</code> 可以是 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。


## Examples

### Example #1 
找出 #date(2011, 12, 31) 這個日期落在目前年度的哪一個季度。
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
