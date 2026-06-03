---
title: Web.Contents
---

# Web.Contents


Trả về nội dung được tải xuống từ url ở dạng nhị phân.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Trả về nội dung được tải xuống từ `url` dưới dạng nhị phân. Một tham số bản ghi `options` tùy chọn có thể được cung cấp để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `Query` : Thêm tham số truy vấn theo chương trình vào URL và không phải quan tâm đến việc thoát.
-   `ApiKeyName` : Nếu site đích có khái niệm về khóa API thì tham số này có thể được sử dụng để chỉ định tên (không phải giá trị) của tham số khóa phải được sử dụng trong URL. Giá trị khóa thực tế được cung cấp trong thông tin xác thực.
-   `Headers` : Việc chỉ định giá trị này dưới dạng bản ghi sẽ cung cấp tiêu đề bổ sung cho yêu cầu HTTP.
-   `Timeout` : Việc chỉ định giá trị này dưới dạng khoảng thời gian sẽ thay đổi thời gian chờ cho yêu cầu HTTP. Giá trị mặc định là 100 giây.
-   `ExcludedFromCacheKey` : Việc chỉ định giá trị này dưới dạng danh sách sẽ loại trừ các khóa tiêu đề HTTP này khỏi việc trở thành một phần trong phép tính để tạo bộ đệm ẩn cho dữ liệu.
-   `IsRetry` : Việc chỉ định giá trị lô-gic này là true sẽ bỏ qua mọi phản hồi hiện có trong bộ đệm ẩn khi tải dữ liệu.
-   `ManualStatusHandling` : Việc chỉ định giá trị này dưới dạng danh sách sẽ ngăn chặn mọi thao tác xử lý tích hợp sẵn cho các yêu cầu HTTP có phản hồi chứa một trong các mã trạng thái này.
-   `RelativePath` : Việc chỉ định giá trị này dưới dạng văn bản sẽ gắn kết giá trị với URL cơ sở trước khi thực hiện yêu cầu.
-   `Content` : Việc chỉ định giá trị này sẽ thay đổi yêu cầu web từ GET thành POST, sử dụng giá trị của tùy chọn dưới dạng nội dung của POST.

Yêu cầu HTTP được thực hiện dưới dạng GET (khi không có Nội dung nào được chỉ định) hoặc POST (khi có Nội dung). Chỉ có thể thực hiện các yêu cầu POST ẩn danh.  
  
Tiêu đề của phản hồi HTTP có sẵn dưới dạng siêu dữ liệu trên kết quả nhị phân. Bên ngoài ngữ cảnh trình kết nối dữ liệu tùy chỉnh, chỉ có một tập hợp con tiêu đề phản hồi sẵn dùng (vì lý do bảo mật).


## Examples

### Example #1
Truy xuất nội dung của `"https://bing.com/search?q=Power+Query"` bằng các tùy chọn RelativePath và Query. Những tùy chọn này có thể được sử dụng để truy vấn động một URL cơ sở tĩnh.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Thực hiện POST dựa trên một URL, truyền qua tải trọng JSON nhị phân và phân tích phản hồi dưới dạng JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Kết nối với một URL an toàn chấp nhận khóa xác thực như một phần trong chuỗi truy vấn của khóa đó. Thay vì mã hóa cứng khóa bí mật ở dạng M (có rủi ro về bảo mật), khóa có thể được cung cấp một cách an toàn bằng cách chỉ định tên của khóa (chứ không phải giá trị của khóa) ở dạng M, chọn xác thực Web API và nhập giá trị khóa như một phần của thông tin xác thực API cho Web. Khi được dùng theo cách này, ví dụ sau sẽ tạo một yêu cầu đến `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
