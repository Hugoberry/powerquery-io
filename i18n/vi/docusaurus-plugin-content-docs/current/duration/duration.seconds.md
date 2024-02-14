---
title: Duration.Seconds
---

# Duration.Seconds


Trả về phần giây của một khoảng thời gian.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Trả về phần giây của <code>duration</code>.


## Examples

### Example #1 
Trích xuất giây từ giá trị khoảng thời gian.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
