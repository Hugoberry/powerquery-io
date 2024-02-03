---
title: Web.Headers
---

# Web.Headers


## Description

Trả về tiêu đề HTTP được tải xuống từ url dưới dạng giá trị bản ghi.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Trả về tiêu đề được tải xuống từ <code>url</code> dưới dạng bản ghi. Tham số bản ghi tùy chọn <code>options</code> có thể được cung cấp để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:    <ul><li><code>Query</code> : Th&#234;m tham số truy vấn theo chương trình v&#224;o URL v&#224; kh&#244;ng phải quan t&#226;m đ&#234;́n việc tho&#225;t.</li><li><code>ApiKeyName</code> : Nếu site đ&#237;ch c&#243; kh&#225;i niệm về kh&#243;a API thì tham số n&#224;y c&#243; thể được sử dụng để chỉ định t&#234;n (kh&#244;ng phải gi&#225; trị) của tham số khóa phải được sử dụng trong URL. Gi&#225; trị kh&#243;a thực tế được cung cấp trong th&#244;ng tin xác thực.</li><li><code>Headers</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng bản ghi sẽ cung cấp ti&#234;u đề bổ sung cho y&#234;u cầu HTTP.</li><li><code>Timeout</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng khoảng thời gian sẽ thay đổi thời gian chờ cho y&#234;u cầu HTTP. Gi&#225; trị mặc định l&#224; 100 gi&#226;y.</li><li><code>ExcludedFromCacheKey</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng danh s&#225;ch sẽ loại trừ c&#225;c khóa ti&#234;u đề HTTP n&#224;y khỏi vi&#234;̣c trở thành một phần trong ph&#233;p t&#237;nh đ&#234;̉ tạo bộ đệm ẩn cho dữ liệu.</li><li><code>IsRetry</code> : Vi&#234;̣c chỉ định gi&#225; trị l&#244;-gic n&#224;y l&#224; true sẽ bỏ qua mọi phản hồi hiện c&#243; trong bộ đệm ẩn khi tải dữ liệu.</li><li><code>ManualStatusHandling</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng danh s&#225;ch sẽ ngăn chặn mọi thao t&#225;c xử lý t&#237;ch hợp sẵn cho c&#225;c y&#234;u cầu HTTP có phản hồi chứa một trong c&#225;c m&#227; trạng th&#225;i này.</li><li><code>RelativePath</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng văn bản sẽ gắn kết giá trị với URL cơ sở trước khi thực hiện y&#234;u cầu.</li></ul>    Yêu cầu HTTP được thực hiện với phương pháp HEAD. Bên ngoài ngữ cảnh trình kết nối dữ liệu tùy chỉnh, chỉ có một tập hợp con tiêu đề phản hồi sẵn dùng (vì lý do bảo mật).    


## Examples

### Example #1 
Truy xuất tiêu đề HTTP cho &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; bằng tùy chọn RelativePath và Truy vấn.
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
