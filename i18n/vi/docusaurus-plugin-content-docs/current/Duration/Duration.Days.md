---
title: Duration.Days
---

# Duration.Days


## Description

Trả về phần ngày của một khoảng thời gian.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Trả về phần ngày của <code>duration</code>.


## Examples

### Example #1 
Tính số ngày giữa hai ngày.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
