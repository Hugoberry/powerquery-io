---
title: List.LastN
---

# List.LastN


## Description

Trả về giá trị cuối cùng trong danh sách.  Có thể tùy chọn chỉ định số lượng giá trị để trả về hoặc một điều kiện đủ tiêu chuẩn.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Trả về mục cuối cùng của danh sách <code>list</code>. Nếu danh sách trống thì một ngoại lệ được đưa ra. Hàm này lấy một tham số tùy chọn là <code>countOrCondition</code> để hỗ trợ thu thập nhiều mục hoặc lọc mục. Có thể chỉ định <code>countOrCondition</code> theo ba cách: <ul>  <li>Nếu một số được chỉ định thì tối đa là số lượng mục đó được trả về. </li>  <li>Nếu một điều kiện được chỉ định thì tất cả các mục ban đầu đáp ứng được điều kiện này được trả về, bắt đầu ở cuối danh sách. Khi một mục không đáp ứng được điều kiện thì không có thêm mục nào được xem xét. </li>  <li>Nếu tham số này rỗng thì mục cuối cùng trong danh sách được trả về.</li> </ul>


## Examples

### Example #1 
Tìm giá trị cuối cùng trong danh sách \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Tìm các giá trị cuối cùng trong danh sách \{3, 4, 5, -1, 7, 8, 2} lớn hơn 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
