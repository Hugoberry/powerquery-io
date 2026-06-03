---
title: Binary.FromText
---

# Binary.FromText


Mã hóa dữ liệu từ dạng thức văn bản thành dạng thức nhị phân.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Trả về kết quả chuyển đổi giá trị văn bản `text` thành một nhị phân (danh sách `number`). Có thể chỉ định `encoding` để cho biết mã hóa được sử dụng trong giá trị văn bản. Có thể sử dụng các giá trị `BinaryEncoding` sau đây cho `encoding`.

-   `BinaryEncoding.Base64`: Mã hóa cơ sở 64
-   `BinaryEncoding.Hex`: Mã hóa hệ 16


## Examples

### Example #1
Giải mã "1011" thành nhị phân.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Giải mã "1011" thành nhị phân có mã hóa hệ 16.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
