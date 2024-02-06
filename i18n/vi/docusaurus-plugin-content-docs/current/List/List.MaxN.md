---
title: List.MaxN
---

# List.MaxN


Trả về (các) giá trị lớn nhất trong danh sách. Phải chỉ định số lượng giá trị trả về hoặc một điều kiện lọc.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Trả về (các) giá trị lớn nhất trong danh sách, <code>list</code>.    Sau khi sắp xếp hàng có thể chỉ định tham số tùy chọn để lọc thêm kết quả. Tham số tùy chọn <code>countOrCondition</code> chỉ định số lượng giá trị trả về hoặc một điều kiện lọc. Tham số tùy chọn <code>comparisonCriteria</code> chỉ định cách so sánh các giá trị trong danh sách. <ul>        <li> <code>list</code>: Danh sách giá trị.</li>        <li> <code>countOrCondition</code>:  Nếu một số được chỉ định thì một danh sách bao gồm tối đa <code>countOrCondition</code> mục theo thứ tự tăng dần được trả về. Nếu một điều kiện được chỉ định thì một danh sách chứa các mục đáp ứng điều kiện ngay từ ban đầu được trả về. Khi một mục không đáp ứng điều kiện thì không có thêm mục nào được xem xét.</li><li><code>comparisonCriteria</code>: <i>[Tùy chọn]</i> Có thể chỉ định một giá trị <code>comparisonCriteria</code> tùy chọn để xác định cách so sánh các mục trong danh sách. Nếu tham số này rỗng thì trình so sánh mặc định được sử dụng. </li></ul>



## Category
List.Ordering
