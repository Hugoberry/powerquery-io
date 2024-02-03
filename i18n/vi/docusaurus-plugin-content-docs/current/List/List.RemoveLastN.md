---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Trả về một danh sách loại bỏ số lượng phần tử đã được chỉ định từ cuối danh sách.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Trả về một danh sách loại bỏ các phần tử <code>countOrCondition</code> cuối cùng từ cuối danh sách <code>list</code>. Nếu <code>list</code> có ít hơn <code>countOrCondition</code> phần tử thì danh sách trống được trả về. <ul> <li>Nếu một số được chỉ định thì tối đa là số lượng mục đó được loại bỏ. </li> <li>Nếu một điều kiện được chỉ định thì danh sách được trả về kết thúc bằng phần tử đầu tiên tính từ cuối trong <code>list</code> đáp ứng tiêu chí. Khi một mục không đáp ứng điều kiện thì không có thêm mục nào được xem xét. </li> <li>Nếu tham số này rỗng thì chỉ có một mục bị loại bỏ. </li> </ul>


## Examples

### Example #1 
Tạo một danh sách từ \{1, 2, 3, 4, 5} mà không có 3 số cuối cùng.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Tạo một danh sách từ \{5, 4, 2, 6, 4} kết thúc bằng một số nhỏ hơn 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
