---
title: Duration.TotalDays
---

# Duration.TotalDays


Trả về tổng số ngày trong khoảng thời gian này.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Trả về tổng số ngày kéo dài theo <code>duration</code>.


## Examples

### Example #1 
Tìm tổng số ngày kéo dài theo giá trị khoảng thời gian.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
