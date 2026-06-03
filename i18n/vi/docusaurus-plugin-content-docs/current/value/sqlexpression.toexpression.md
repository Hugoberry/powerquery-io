---
title: SqlExpression.ToExpression
---

# SqlExpression.ToExpression


Chuyển đổi truy vấn SQL được cung cấp thành mã M. Hàm này chỉ dùng cho nội bộ.


## Syntax

```powerquery
SqlExpression.ToExpression(
    sql as text,
    environment as record
) as text
```


## Remarks

Chuyển đổi truy vấn `sql` được cung cấp thành mã M bằng các mã định danh mà `environment` xác định sẵn. Hàm này chỉ dùng cho nội bộ.



## Category
Values.Implementation
