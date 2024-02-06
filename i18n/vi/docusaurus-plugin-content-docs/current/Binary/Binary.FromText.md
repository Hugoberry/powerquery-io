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

Trả về kết quả chuyển đổi giá trị văn bản <code>text</code> thành một nhị phân (danh sách <code>number</code>). Có thể chỉ định <code>encoding</code> để cho biết mã hóa được sử dụng trong giá trị văn bản.      Có thể sử dụng các giá trị <code>BinaryEncoding</code> sau đây cho <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Mã hóa cơ sở 64</li>        <li><code>BinaryEncoding.Hex</code>: Mã hóa hệ 16</li>      </ul>


## Examples

### Example #1 
Giải mã &#34;1011&#34; thành nhị phân.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Giải mã &#34;1011&#34; thành nhị phân có mã hóa hệ 16.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
