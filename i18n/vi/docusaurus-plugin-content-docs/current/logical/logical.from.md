---
title: Logical.From
---

# Logical.From


Tạo một lôgic từ giá trị cho sẵn.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Trả về giá trị `logical` từ `value` cho sẵn. Nếu `value` cho sẵn là `null` thì `Logical.From` trả về `null`. Nếu `value` cho sẵn là `logical` thì `value` được trả về. Giá trị của các loại sau đây có thể được chuyển đổi thành giá trị `logical`:

-   `text`: Một giá trị `logical` từ giá trị văn bản, `"true"` hoặc `"false"`. Tham khảo `Logical.FromText` để biết chi tiết.
-   `number`: `false` nếu `value` bằng `0`, `true` nếu ngược lại.

Nếu `value` thuộc một loại khác thì một lỗi được trả về.


## Examples

### Example #1
Chuyển đổi `2` thành giá trị `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
