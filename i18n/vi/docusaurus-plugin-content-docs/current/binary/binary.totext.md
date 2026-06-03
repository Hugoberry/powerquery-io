---
title: Binary.ToText
---

# Binary.ToText


Mã hóa dữ liệu nhị phân thành dạng thức văn bản.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Trả về kết quả chuyển đổi danh sách số nhị phân `binary` thành giá trị văn bản. Có thể tùy ý chỉ định `encoding` để cho biết mã hóa được sử dụng trong giá trị văn bản đã tạo Có thể sử dụng các giá trị `BinaryEncoding` sau đây cho `encoding`.

-   `BinaryEncoding.Base64`: Mã hóa cơ sở 64
-   `BinaryEncoding.Hex`: Mã hóa hệ 16



## Category
Binary
