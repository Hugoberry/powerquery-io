---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Trả về một số cho biết ngày đó rơi vào quý nào trong năm.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Trả về một số trong khoảng từ 1 tới 4 cho biết ngày <code>dateTime</code> rơi vào quý nào trong năm. <code>dateTime</code> có thể là giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code>.


## Examples

### Example #1 
Tìm ngày #date(2011, 12, 31) rơi vào quý nào trong năm.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
