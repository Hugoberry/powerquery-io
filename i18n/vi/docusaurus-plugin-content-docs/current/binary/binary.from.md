---
title: Binary.From
---

# Binary.From


Tạo một nhị phân từ giá trị cho sẵn


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Trả về giá trị `binary` từ `value` đã cho. Nếu `value` đã cho là `null`, thì `Binary.From` sẽ trả về `null`. Nếu `value` đã cho là `binary`, thì `value` sẽ được trả về. Giá trị của các loại sau có thể được chuyển đổi thành giá trị `binary`:

-   `text`: Giá trị `binary` từ dạng biểu diễn văn bản. Tham khảo `Binary.FromText` để biết chi tiết.

Nếu `value` thuộc bất kỳ loại nào khác, thì lỗi sẽ được trả về.


## Examples

### Example #1
Nhận giá trị `binary` của `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
