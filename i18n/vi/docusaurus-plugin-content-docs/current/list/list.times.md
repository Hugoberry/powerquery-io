---
title: List.Times
---

# List.Times


Tạo danh sách các giá trị time được cho sẵn một giá trị ban đầu, tổng cộng và giá thị thời lượng tăng dần.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Trả về một danh sách giá trị `time` có kích cỡ là `count`, bắt đầu tại `start`. Số gia cho sẵn, `step`, là giá trị `duration` được thêm vào mọi giá trị.


## Examples

### Example #1
Tạo một danh sách chứa 4 giá trị bắt đầu từ noon (#time(12, 0, 0)) tăng lên theo số gia là một giờ (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
