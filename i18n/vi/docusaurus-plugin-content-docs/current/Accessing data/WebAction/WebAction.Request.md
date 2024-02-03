---
title: WebAction.Request
---

# WebAction.Request


## Description

Tạo tác vụ mà khi được thực thi sẽ trả về kết quả thực hiện yêu cầu HTTP dưới dạng giá trị nhị phân.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Tạo một hành động mà khi được thực thi, sẽ trả về kết quả của việc thực hiện yêu cầu <code>method</code> dựa trên <code>url</code> bằng HTTP dưới dạng giá trị nhị phân.    Tham số bản ghi tùy chọn <code>options</code> có thể được cung cấp để chỉ định thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:    <ul><li><code>Query</code> : Th&#234;m tham số truy vấn theo chương trình v&#224;o URL v&#224; kh&#244;ng phải quan t&#226;m đ&#234;́n việc tho&#225;t.</li><li><code>ApiKeyName</code> : Nếu site đ&#237;ch c&#243; kh&#225;i niệm về kh&#243;a API thì tham số n&#224;y c&#243; thể được sử dụng để chỉ định t&#234;n (kh&#244;ng phải gi&#225; trị) của tham số khóa phải được sử dụng trong URL. Gi&#225; trị kh&#243;a thực tế được cung cấp trong th&#244;ng tin xác thực.</li><li><code>Headers</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng bản ghi sẽ cung cấp ti&#234;u đề bổ sung cho y&#234;u cầu HTTP.</li><li><code>Timeout</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng khoảng thời gian sẽ thay đổi thời gian chờ cho y&#234;u cầu HTTP. Gi&#225; trị mặc định l&#224; 100 gi&#226;y.</li><li><code>ExcludedFromCacheKey</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng danh s&#225;ch sẽ loại trừ c&#225;c khóa ti&#234;u đề HTTP n&#224;y khỏi vi&#234;̣c trở thành một phần trong ph&#233;p t&#237;nh đ&#234;̉ tạo bộ đệm ẩn cho dữ liệu.</li><li><code>IsRetry</code> : Vi&#234;̣c chỉ định gi&#225; trị l&#244;-gic n&#224;y l&#224; true sẽ bỏ qua mọi phản hồi hiện c&#243; trong bộ đệm ẩn khi tải dữ liệu.</li><li><code>ManualStatusHandling</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng danh s&#225;ch sẽ ngăn chặn mọi thao t&#225;c xử lý t&#237;ch hợp sẵn cho c&#225;c y&#234;u cầu HTTP có phản hồi chứa một trong c&#225;c m&#227; trạng th&#225;i này.</li><li><code>RelativePath</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y dưới dạng văn bản sẽ gắn kết giá trị với URL cơ sở trước khi thực hiện y&#234;u cầu.</li><li><code>Content</code> : Vi&#234;̣c chỉ định gi&#225; trị n&#224;y sẽ khi&#234;́n nội dung của giá trị trở th&#224;nh n&#244;̣i dung của y&#234;u cầu HTTP.</li></ul>    <br />    Lưu ý rằng hàm này bị vô hiệu hóa ở hầu hết các ngữ cảnh. Hãy cân nhắc sử dụng Web.Contents hoặc Web.Headers để thay thế.    


## Examples

### Example #1 
Thực hiện một yêu cầu GET với Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
