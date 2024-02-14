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

Trả về nội dung được tải xuống từ <code>url</code> dưới dạng nhị phân. Tham số bản ghi tùy chọn <code>options</code> có thể được cung cấp để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:    <ul><li><code>Query</code> : Th&#234;m tham số truy vấn theo chương trình v&#224;o URL v&#224; kh&#244;ng phải quan t&#226;m đ&#234;́n việc tho&#225;t.</li><li><code>ApiKeyName</code> : Nếu site đ&#237;ch c&#243; kh&#225;i niệm về kh&#243;a API thì tham số n&#224;y c&#243; thể được sử dụng để chỉ định t&#234;n (kh&#244;ng phải gi&#225; trị) của tham số khóa phải được sử dụng trong URL. Gi&#225; trị kh&#243;a thực tế được cung cấp trong th&#244;ng tin xác thực.</li><li><code>Headers</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng bản ghi sẽ cung cấp ti&#234;u đề bổ sung cho y&#234;u cầu HTTP.</li><li><code>Timeout</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng khoảng thời gian sẽ thay đổi thời gian chờ cho y&#234;u cầu HTTP. Gi&#225; trị mặc định l&#224; 100 gi&#226;y.</li><li><code>ExcludedFromCacheKey</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng danh s&#225;ch sẽ loại trừ c&#225;c khóa ti&#234;u đề HTTP n&#224;y khỏi vi&#234;̣c trở thành một phần trong ph&#233;p t&#237;nh đ&#234;̉ tạo bộ đệm ẩn cho dữ liệu.</li><li><code>IsRetry</code> : Vi&#234;̣c chỉ định gi&#225; trị l&#244;-gic n&#224;y l&#224; true sẽ bỏ qua mọi phản hồi hiện c&#243; trong bộ đệm ẩn khi tải dữ liệu.</li><li><code>ManualStatusHandling</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng danh s&#225;ch sẽ ngăn chặn mọi thao t&#225;c xử lý t&#237;ch hợp sẵn cho c&#225;c y&#234;u cầu HTTP có phản hồi chứa một trong c&#225;c m&#227; trạng th&#225;i này.</li><li><code>RelativePath</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng văn bản sẽ gắn kết giá trị với URL cơ sở trước khi thực hiện y&#234;u cầu.</li><li><code>Content</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y sẽ thay đổi y&#234;u cầu web từ GET thành POST, sử dụng gi&#225; trị của t&#249;y chọn dưới dạng nội dung của POST.</li></ul>    Yêu cầu HTTP được thực hiện dưới dạng GET (khi không có Nội dung nào được chỉ định) hoặc POST (khi có Nội dung). Chỉ có thể thực hiện các yêu cầu POST ẩn danh.    <br />    Tiêu đề của phản hồi HTTP có sẵn dưới dạng siêu dữ liệu trên kết quả nhị phân. Bên ngoài ngữ cảnh trình kết nối dữ liệu tùy chỉnh, chỉ có một tập hợp con tiêu đề phản hồi sẵn dùng (vì lý do bảo mật).    


## Examples

### Example #1 
Truy xuất nội dung của &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; bằng các tùy chọn RelativePath và Query. Những tùy chọn này có thể được sử dụng để truy vấn động một URL cơ sở tĩnh.
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
Kết nối với một URL an toàn chấp nhận khóa xác thực như một phần trong chuỗi truy vấn của khóa đó. Thay vì mã hóa cứng khóa bí mật ở dạng M (có rủi ro về bảo mật),     khóa có thể được cung cấp một cách an toàn bằng cách chỉ định tên của khóa (chứ không phải giá trị của khóa) ở dạng M, chọn xác thực Web API và nhập giá trị khóa như một phần của thông tin xác thực API cho Web.    Khi được dùng theo cách này, ví dụ sau sẽ tạo một yêu cầu đến &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
