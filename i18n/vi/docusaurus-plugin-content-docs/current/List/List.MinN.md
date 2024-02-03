---
title: List.MinN
---

# List.MinN


## Description

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


## Details

Trả về (các) giá trị nhỏ nhất trong danh sách, <code>list</code>.    Tham số <code>countOrCondition</code> chỉ định số lượng giá trị trả về hoặc một điều kiện lọc. Tham số tùy chọn <code>comparisonCriteria</code> chỉ định cách so sánh các giá trị trong danh sách. <ul>        <li> <code>list</code>: Danh sách giá trị.</li>        <li> <code>countOrCondition</code>:  Nếu một số được chỉ định thì một danh sách bao gồm tối đa <code>countOrCondition</code> mục theo thứ tự tăng dần được trả về. Nếu một điều kiện được chỉ định thì một danh sách chứa các mục đáp ứng điều kiện này ngay từ ban đầu được trả về. Khi một mục không đáp ứng điều kiện thì không có thêm mục nào được xem xét. Nếu tham số này rỗng thì giá trị duy nhất nhỏ nhất trong danh sách được trả về.</li><li><code>comparisonCriteria</code>: <i>[Tùy chọn]</i> Có thể chỉ định một giá trị <code>comparisonCriteria</code> tùy chọn để xác định cách so sánh các mục trong danh sách. Nếu tham số này rỗng thì trình so sánh mặc định được sử dụng. </li></ul>


## Examples

### Example #1 
Tìm 5 giá trị nhỏ nhất trong danh sách &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
