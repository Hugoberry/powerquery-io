---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Trả về tổng số phút trong khoảng thời gian này.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Trả về tổng số phút kéo dài theo <code>duration</code>.


## Examples

### Example #1 
Tìm tổng số phút kéo dài theo giá trị khoảng thời gian.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
