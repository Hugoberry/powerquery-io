---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Tạo danh sách các giá trị datetimezone được cho sẵn một giá trị ban đầu, tổng cộng và giá thị thời lượng tăng dần.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Trả về một danh sách giá trị <code>datetimezone</code> có kích cỡ là <code>count</code>, bắt đầu tại <code>start</code>. Số gia cho sẵn, <code>step</code>, là giá trị <code>duration</code> được thêm vào mọi giá trị.


## Examples

### Example #1 
Tạo một danh sách chứa 10 giá trị bắt đầu từ 5 phút trước Ngày Tết (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) tăng với số gia là 1 phút (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
