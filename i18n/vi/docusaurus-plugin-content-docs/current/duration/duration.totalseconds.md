---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Trả về tổng số giây trong khoảng thời gian này.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Trả về tổng số giây kéo dài theo <code>duration</code>.


## Examples

### Example #1 
Tìm tổng số giây kéo dài theo giá trị khoảng thời gian.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
