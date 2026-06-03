---
title: List.Skip
---

# List.Skip


Trả về một danh sách bỏ qua số lượng phần tử đã được chỉ định tại phần đầu danh sách.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Trả về một danh sách bỏ qua phần tử đầu tiên của danh sách `list`. Nếu `list` là danh sách trống, thì sẽ trả về danh sách trống. Hàm này lấy một tham số tùy chọn, `countOrCondition`, để hỗ trợ bỏ qua nhiều giá trị như được liệt kê dưới đây.

-   Nếu một số được chỉ định, tối đa số lượng mục đó sẽ bị bỏ qua.
-   Nếu một điều kiện được chỉ định thì mọi mục khớp liên tiếp ở đầu `list` sẽ bị bỏ qua.
-   Nếu tham số này là null thì hoạt động mặc định sẽ được quan sát.


## Examples

### Example #1
Tạo một danh sách từ \{1, 2, 3, 4, 5\} mà không có 3 số đầu tiên.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Tạo một danh sách từ \{5, 4, 2, 6, 1\} bắt đầu bằng một số dưới 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
