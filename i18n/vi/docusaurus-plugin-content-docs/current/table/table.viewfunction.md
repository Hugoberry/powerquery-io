---
title: Table.ViewFunction
---

# Table.ViewFunction


Tạo một hàm có thể được chặn bởi một trình xử lý được xác định trên một dạng xem (thông qua Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Tạo hàm dạng xem dựa trên `function` có thể được xử lý trong dạng xem tạo bởi `Table.View`.

Có thể sử dụng bộ xử lý `OnInvoke` của `Table.View` để xác định bộ xử lý cho hàm dạng xem.

Như với bộ xử lý cho các phép toán tích hợp, nếu không bộ xử lý `OnInvoke` nào được chỉ định, hoặc nếu bộ xử lý không xử lý hàm dạng xem, hoặc bộ xử lý phát sinh lỗi, `function` sẽ được áp dụng ở phía trên cùng của dạng xem.

Tham khảo tài liệu về trình kết nối tùy chỉnh Power Query được phát hành để biết mô tả đầy đủ hơn về `Table.View` và các hàm dạng xem tùy chỉnh.



## Category
Table.Table construction
