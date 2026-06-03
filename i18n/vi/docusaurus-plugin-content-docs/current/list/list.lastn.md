---
title: List.LastN
---

# List.LastN


Trả về danh sách (các) mục cuối cùng trong danh sách đã chỉ định. Có thể tùy chọn chỉ định số lượng giá trị để trả về hoặc một điều kiện đủ tiêu chuẩn.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Trả về danh sách (các) mục cuối cùng trong danh sách đã chỉ định.

-   `list`: Danh sách cần kiểm tra. Nếu danh sách trống, trả về danh sách trống.
-   `countOrCondition`: (Tùy chọn) Hỗ trợ lấy nhiều mục hoặc lọc các mục. Mặc dù tham số này được liệt kê là tùy chọn, nhưng sẽ xảy ra lỗi nếu không cung cấp giá trị này hoặc có giá trị là `null`. Tham số này có thể được chỉ định theo hai cách:
    -   Nếu một số được chỉ định, tối đa số lượng mục đó sẽ được trả về.
    -   Nếu chỉ định một điều kiện, trả về tất cả các mục đáp ứng điều kiện, bắt đầu từ cuối danh sách. Khi một mục không đáp ứng điều kiện, không xem xét các mục tiếp theo.


## Examples

### Example #1
Tìm giá trị cuối cùng trong danh sách \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Tìm các giá trị cuối cùng trong danh sách \{3, 4, 5, -1, 7, 8, 2\} lớn hơn 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
