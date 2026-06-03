---
title: Time.FromText
---

# Time.FromText


Tạo Time từ dạng thức Time địa phương, tùy chỉnh và quốc tế.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Tạo giá trị `time` từ dạng biểu diễn văn bản, `text`. Một tham số `record` tùy chọn, `options`, có thể được cung cấp để chỉ định các thuộc tính bổ sung. `record` có thể chứa các trường sau:

-   `Format`: Giá trị `text` cho biết định dạng sẽ sử dụng. Để biết thêm chi tiết, hãy truy cập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ qua trường này hoặc cung cấp giá trị `null` sẽ dẫn đến phân tích thời gian bằng phương án hiệu quả nhất.
-   `Culture`: Khi `Format` không phải là null, `Culture` sẽ kiểm soát một số bộ xác định định dạng. Ví dụ: trong `"en-US"` `"tt"` là `"AM" hoặc "PM"` còn trong `"ar-EG"` `"tt"` là `"ص" hoặc "م"`. Khi `Format` là `null` thì `Culture` sẽ kiểm soát định dạng mặc định cần sử dụng. Khi `Culture` là `null` hoặc bị bỏ qua, `Culture.Current` sẽ được sử dụng.

Để hỗ trợ các quy trình làm việc cũ, `options` cũng có thể là giá trị văn bản. Giá trị này có hành vi giống như khi `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Chuyển đổi `"10:12:31am"` thành giá trị Thời gian.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Chuyển `"1012"` thành giá trị Thời gian.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Chuyển `"10"` thành giá trị Thời gian.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
