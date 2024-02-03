---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Trả về tổng số giờ trong khoảng thời gian này.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Trả về tổng số giờ kéo dài theo <code>duration</code>.


## Examples

### Example #1 
Tìm tổng số giờ kéo dài theo giá trị khoảng thời gian.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
