---
title: Web.Headers
---

# Web.Headers


Trả về tiêu đề HTTP được tải xuống từ url dưới dạng giá trị bản ghi.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Trả về tiêu đề được tải xuống từ `url` dưới dạng bản ghi. Tham số bản ghi tùy chọn `options` có thể được cung cấp để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `Query` : Thêm tham số truy vấn theo chương trình vào URL và không phải quan tâm đến việc thoát.
-   `ApiKeyName` : Nếu site đích có khái niệm về khóa API thì tham số này có thể được sử dụng để chỉ định tên (không phải giá trị) của tham số khóa phải được sử dụng trong URL. Giá trị khóa thực tế được cung cấp trong thông tin xác thực.
-   `Headers` : Việc chỉ định giá trị này dưới dạng bản ghi sẽ cung cấp tiêu đề bổ sung cho yêu cầu HTTP.
-   `Timeout` : Việc chỉ định giá trị này dưới dạng khoảng thời gian sẽ thay đổi thời gian chờ cho yêu cầu HTTP. Giá trị mặc định là 100 giây.
-   `ExcludedFromCacheKey` : Việc chỉ định giá trị này dưới dạng danh sách sẽ loại trừ các khóa tiêu đề HTTP này khỏi việc trở thành một phần trong phép tính để tạo bộ đệm ẩn cho dữ liệu.
-   `IsRetry` : Việc chỉ định giá trị lô-gic này là true sẽ bỏ qua mọi phản hồi hiện có trong bộ đệm ẩn khi tải dữ liệu.
-   `ManualStatusHandling` : Việc chỉ định giá trị này dưới dạng danh sách sẽ ngăn chặn mọi thao tác xử lý tích hợp sẵn cho các yêu cầu HTTP có phản hồi chứa một trong các mã trạng thái này.
-   `RelativePath` : Việc chỉ định giá trị này dưới dạng văn bản sẽ gắn kết giá trị với URL cơ sở trước khi thực hiện yêu cầu.

Yêu cầu HTTP được thực hiện với phương pháp HEAD. Bên ngoài ngữ cảnh trình kết nối dữ liệu tùy chỉnh, chỉ có một tập hợp con tiêu đề phản hồi sẵn dùng (vì lý do bảo mật).


## Examples

### Example #1
Truy xuất tiêu đề HTTP cho `"https://bing.com/search?q=Power+Query"` bằng tùy chọn RelativePath và Truy vấn.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
