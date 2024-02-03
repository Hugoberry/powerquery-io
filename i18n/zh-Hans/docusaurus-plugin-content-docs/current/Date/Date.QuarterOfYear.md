---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

返回一个数值，该数值指示日期属于年份中的哪个季度。


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

返回一个介于 1 到 4 之间的数值，该数值指示日期 <code>dateTime</code> 属于年份中的哪个季度。<code>dateTime</code> 可以是 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。


## Examples

### Example #1 
查找日期 #date(2011, 12, 31) 属于年份中的哪个季度。
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
