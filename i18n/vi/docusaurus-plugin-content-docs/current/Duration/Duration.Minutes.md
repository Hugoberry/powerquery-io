---
title: Duration.Minutes
---

# Duration.Minutes


## Description

Trả về phần phút của một khoảng thời gian.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

Trả về phần phút của <code>duration</code>.


## Examples

### Example #1 
Trích xuất phút từ giá trị khoảng thời gian.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
