---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Trả về giá trị của biến được chỉ định hoặc giá trị mặc định nếu biến không được xác định.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Trả về giá trị của biến được chỉ định `identifier` do môi trường đánh giá hiện tại xác định. Nếu biến không được xác định, giá trị không bắt buộc `defaultValue` sẽ được trả về.



## Category
Values.Implementation
