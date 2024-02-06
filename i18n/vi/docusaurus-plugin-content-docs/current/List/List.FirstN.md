---
title: List.FirstN
---

# List.FirstN


Trả về tập hợp mục đầu tiên trong danh sách bằng cách chỉ định số lượng mục để trả về hoặc một điều kiện đủ tiêu chuẩn.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

 <ul>  <li>Nếu một số được chỉ định thì tối đa là số lượng mục đó được trả về. </li>  <li>Nếu một điều kiện được chỉ định thì tất cả các mục ban đầu đáp ứng được điều kiện này được trả về. Khi một mục không đáp ứng được điều kiện thì không có thêm mục nào được xem xét. </li> </ul>


## Examples

### Example #1 
Tìm các giá trị ban đầu trong danh sách \{3, 4, 5, -1, 7, 8, 2} lớn hơn 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
