---
title: DateTime.FromText
---

# DateTime.FromText


Tạo datetimezone từ định dạng ngày giờ địa phương và quốc tế.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Tạo giá trị `datetime` từ dạng biểu diễn văn bản `text`. Một tham số `record` tùy chọn, `options`, có thể được cung cấp để chỉ định các thuộc tính bổ sung. `record` có thể chứa các trường sau:

-   `Format`: Giá trị `text` cho biết định dạng sẽ sử dụng. Để biết thêm chi tiết, hãy truy cập https://go.microsoft.com/fwlink/?linkid=2180104 và https://go.microsoft.com/fwlink/?linkid=2180105. Việc bỏ qua trường này hoặc cung cấp giá trị `null` sẽ khiến hệ thống phân tích ngày bằng phương án hiệu quả nhất.
-   `Culture`: Khi `Format` không phải là null, `Culture` sẽ kiểm soát một số bộ xác định định dạng. Ví dụ: trong `"en-US"` `"MMM"` là `"Jan", "Feb", "Mar", ...`, trong khi trong `"ru-RU"` `"MMM"` là `"янв", "фев", "мар", ...`. Khi `Format` là `null` thì `Culture` sẽ kiểm soát định dạng mặc định cần sử dụng. Khi `Culture` là `null` hoặc bị bỏ qua, `Culture.Current` sẽ được sử dụng.

Để hỗ trợ các quy trình làm việc cũ, `options` cũng có thể là giá trị văn bản. Giá trị này có hành vi giống như khi `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Chuyển đổi `"2010-12-31T01:30:00"` thành giá trị datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Chuyển đổi `"2010-12-31T01:30:00.121212"` thành giá trị datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Chuyển đổi `"2010-12-31T01:30:00"` thành giá trị datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Chuyển đổi `"20101231T013000"` thành giá trị datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
