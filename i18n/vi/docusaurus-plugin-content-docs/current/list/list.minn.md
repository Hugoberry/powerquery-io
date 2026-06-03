---
title: List.MinN
---

# List.MinN


Trả về (các) giá trị nhỏ nhất trong danh sách. Có thể chỉ định số lượng giá trị trả về hoặc một điều kiện lọc.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Trả về (các) giá trị cực tiểu trong danh sách, `list`. Tham số `countOrCondition` chỉ định số lượng giá trị để trả về hoặc một điều kiện lọc. Tham số tùy chọn `comparisonCriteria` chỉ định cách so sánh các giá trị trong danh sách.

-   `list`: Danh sách giá trị.
-   `countOrCondition`: Nếu một số được chỉ định thì một danh sách bao gồm tối đa `countOrCondition` mục theo thứ tự tăng dần được trả về. Nếu một điều kiện được chỉ định thì một danh sách chứa các mục ban đầu đáp ứng được điều kiện này được trả về. Khi một mục không đáp ứng được điều kiện thì không có thêm mục nào được xem xét. Nếu tham số này rỗng thì một giá trị duy nhất nhỏ nhất trong danh sách được trả về.
-   `comparisonCriteria`: *(Tùy chọn)* Có thể chỉ định một giá trị `comparisonCriteria` tùy chọn để xác định cách so sánh các mục trong danh sách. Nếu tham số này rỗng thì trình so sánh mặc định được sử dụng.


## Examples

### Example #1
Tìm 5 giá trị nhỏ nhất trong danh sách `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
