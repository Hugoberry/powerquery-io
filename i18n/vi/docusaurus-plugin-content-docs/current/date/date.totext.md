---
title: Date.ToText
---

# Date.ToText


Trả về một cách biểu diễn văn bản của giá trị ngày.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Trả về dạng biểu diễn văn bản của `date`. Một tham số `record` tùy chọn là `options` có thể được cung cấp để chỉ định các thuộc tính bổ sung. `culture` chỉ được dùng cho quy trình làm việc cũ. `record` có thể chứa các trường sau:

-   `Format`: Giá trị `text` cho biết định dạng sẽ sử dụng. Để biết thêm chi tiết, hãy truy cập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ qua trường này hoặc cung cấp giá trị `null` sẽ dẫn đến định dạng ngày bằng giá trị mặc định do `Culture` xác định.
-   `Culture`: Khi `Format` không phải là null, `Culture` sẽ kiểm soát một số bộ xác định định dạng. Ví dụ: trong `"en-US"` `"MMM"` là `"Jan", "Feb", "Mar", ...`, trong khi trong `"ru-RU"` `"MMM"` là `"янв", "фев", "мар", ...`. Khi `Format` là `null` thì `Culture` sẽ kiểm soát định dạng mặc định cần sử dụng. Khi `Culture` là `null` hoặc bị bỏ qua, `Culture.Current` sẽ được sử dụng.

Để hỗ trợ các quy trình làm việc cũ, `options` và `culture` cũng có thể là giá trị văn bản. Giá trị này có hành vi giống như khi `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Chuyển đổi `#date(2010, 12, 31)` thành giá trị `text`. *Đầu ra kết quả có thể khác nhau tùy thuộc vào văn hóa hiện tại.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Chuyển đổi bằng cách sử dụng dạng thức tùy chỉnh và văn hóa Đức.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Tìm ngày trong lịch Hijri tương ứng với ngày 1 tháng 1 năm 2000 trong lịch Dương.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
