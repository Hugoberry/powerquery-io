---
title: Binary.ToText
---

# Binary.ToText


## Description

Mã hóa dữ liệu nhị phân thành dạng thức văn bản.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Trả về kết quả chuyển đổi danh sách số nhị phân <code>binary</code> thành giá trị văn bản. Có thể tùy ý chỉ định <code>encoding</code> để cho biết mã hóa được sử dụng trong giá trị văn bản đã tạo      Có thể sử dụng các giá trị <code>BinaryEncoding</code> sau đây cho <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Mã hóa cơ sở 64</li>        <li><code>BinaryEncoding.Hex</code>: Mã hóa hệ 16</li>      </ul>



## Category
Binary
