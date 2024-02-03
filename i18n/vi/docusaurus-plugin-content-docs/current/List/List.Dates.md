---
title: List.Dates
---

# List.Dates


## Description

Tạo danh sách giá trị ngày chứa một giá trị ban đầu, tổng cộng và giá thị thời lượng tăng dần.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Trả về một danh sách giá trị <code>date</code> có kích cỡ là <code>count</code>, bắt đầu tại <code>start</code>. Số gia cho sẵn, <code>step</code>, là giá trị <code>duration</code> được thêm vào mọi giá trị.


## Examples

### Example #1 
Tạo một danh sách chứa 5 giá trị bắt đầu từ Đêm giao thừa (#date(2011, 12, 31)) tăng với số gia là 1 ngày (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
