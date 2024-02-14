---
title: List.DateTimes
---

# List.DateTimes


Tạo danh sách các giá trị datetime được cho sẵn một giá trị ban đầu, tổng cộng và giá thị thời lượng tăng dần.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

Trả về một danh sách giá trị <code>datetime</code> có kích cỡ là <code>count</code>, bắt đầu tại <code>start</code>. Số gia cho sẵn, <code>step</code>, là giá trị <code>duration</code> được thêm vào mọi giá trị.


## Examples

### Example #1 
Tạo một danh sách chứa 10 giá trị bắt đầu từ 5 phút trước Ngày Tết (#datetime(2011, 12, 31, 23, 55, 0)) tăng với số gia là 1 phút (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
