---
title: List.RemoveLastN
---

# List.RemoveLastN


Trả về một danh sách loại bỏ số lượng phần tử đã được chỉ định từ cuối danh sách.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Trả về một danh sách xóa các phần tử `countOrCondition` cuối cùng từ cuối danh sách `list`. Nếu `list` có ít hơn `countOrCondition` phần tử, sẽ trả về danh sách trống.

-   Nếu một số được chỉ định, tối đa số lượng mục đó sẽ bị xóa.
-   Nếu một điều kiện được chỉ định thì mọi mục khớp liên tiếp ở cuối `list` sẽ bị xóa.
-   Nếu tham số này là null thì chỉ có một mục bị xóa.


## Examples

### Example #1
Tạo một danh sách từ \{1, 2, 3, 4, 5\} mà không có 3 số cuối cùng.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Tạo một danh sách từ \{5, 4, 2, 6, 4\} kết thúc bằng một số nhỏ hơn 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
