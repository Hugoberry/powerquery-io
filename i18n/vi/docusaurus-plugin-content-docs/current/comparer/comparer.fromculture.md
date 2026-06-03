---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Trả về hàm so sánh dựa trên văn hóa được chỉ định và phân biệt chữ hoa chữ thường.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Trả về hàm so sánh sử dụng `culture` và phân biệt chữ hoa chữ thường do `ignoreCase` xác định để thực hiện phép so sánh.  
  
Hàm so sánh trả về giá trị -1, 0 hoặc 1 dựa trên việc giá trị đầu tiên nhỏ hơn, bằng hay lớn hơn giá trị thứ hai.  
  
Giá trị mặc định của `ignoreCase` là false. `culture` sẽ là một trong các khu vực được .NET framework hỗ trợ (ví dụ như "en-US").


## Examples

### Example #1
So sánh "a" và "A" bằng ngôn ngữ "vi-VN" để xác định xem các giá trị có bằng nhau hay không.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
So sánh "a" và "A" bằng ngôn ngữ "vi-VN" bỏ qua dạng chữ để xác định xem các giá trị có bằng nhau hay không.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
