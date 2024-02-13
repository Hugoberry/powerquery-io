---
title: Guid.From
---

# Guid.From


Trả về giá trị guid từ giá trị đã cho.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Trả về một giá trị <code>Guid.Type</code> từ <code>value</code> đã cho. Nếu <code>value</code> đã cho là <code>null</code>, thì <code>Guid.From</code> sẽ trả về <code>null</code>. Thao tác kiểm tra sẽ được thực hiện để xác định <code>value</code> đã cho có ở định dạng được chấp nhận hay không. Hãy xem ví dụ về các định dạng được chấp nhận.


## Examples

### Example #1 
Có thể cung cấp Guid dưới dạng 32 chữ số thập lục phân liền kề nhau.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Có thể cung cấp Guid dưới dạng 32 chữ số thập lục phân được phân tách bằng dấu nối thành các khối 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Có thể cung cấp Guid dưới dạng 32 chữ số thập lục phân được phân tách bằng dấu nối và nằm trong dấu ôm.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Có thể cung cấp Guid dưới dạng 32 chữ số thập lục phân được phân tách bằng dấu nối và nằm trong ngoặc đơn.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
