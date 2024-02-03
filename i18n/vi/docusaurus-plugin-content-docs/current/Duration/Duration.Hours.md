---
title: Duration.Hours
---

# Duration.Hours


## Description

Trả về phần giờ của một khoảng thời gian.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

Trả về phần giờ của <code>duration</code>.


## Examples

### Example #1 
Trích xuất giờ từ giá trị khoảng thời gian.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
