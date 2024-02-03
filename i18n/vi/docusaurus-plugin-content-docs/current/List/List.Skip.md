---
title: List.Skip
---

# List.Skip


## Description

Trả về một danh sách bỏ qua số lượng phần tử đã được chỉ định tại phần đầu danh sách.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Trả về một danh sách bỏ qua phần tử đầu tiên của danh sách <code>list</code>. Nếu <code>list</code> là danh sách trống thì một danh sách trống được trả về.Hàm này lấy một tham số tùy chọn là <code>countOrCondition</code> để hỗ trợ bỏ qua nhiều giá trị như được nêu bên dưới. <ul> <li>Nếu một số được chỉ định thì tối đa là số lượng mục đó được bỏ qua. </li> <li>Nếu một điều kiện được chỉ định thì danh sách được trả về bắt đầu bằng phần tử đầu tiên trong <code>list</code> đáp ứng tiêu chí. Khi một mục không đáp ứng được điều kiện thì không có thêm mục nào được xem xét. </li> <li>Nếu tham số này là null thì hành vi mặc định được tuân thủ. </li> </ul>


## Examples

### Example #1 
Tạo một danh sách từ \{1, 2, 3, 4, 5} mà không có 3 số đầu tiên.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Tạo một danh sách từ \{5, 4, 2, 6, 1} bắt đầu bằng một số dưới 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
