---
title: WebAction.Request
---

# WebAction.Request


Tạo tác vụ mà khi được thực thi sẽ trả về kết quả thực hiện yêu cầu HTTP dưới dạng giá trị nhị phân.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Tạo một hành động, khi được thực thi, sẽ trả về kết quả của việc thực hiện yêu cầu `method` dựa trên `url` bằng HTTP dưới dạng giá trị nhị phân. Một tham số bản ghi `options` tùy chọn có thể được cung cấp để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `Query` : Thêm tham số truy vấn theo chương trình vào URL và không phải quan tâm đến việc thoát.
-   `ApiKeyName` : Nếu site đích có khái niệm về khóa API thì tham số này có thể được sử dụng để chỉ định tên (không phải giá trị) của tham số khóa phải được sử dụng trong URL. Giá trị khóa thực tế được cung cấp trong thông tin xác thực.
-   `Headers` : Việc chỉ định giá trị này dưới dạng bản ghi sẽ cung cấp tiêu đề bổ sung cho yêu cầu HTTP.
-   `Timeout` : Việc chỉ định giá trị này dưới dạng khoảng thời gian sẽ thay đổi thời gian chờ cho yêu cầu HTTP. Giá trị mặc định là 100 giây.
-   `ExcludedFromCacheKey` : Việc chỉ định giá trị này dưới dạng danh sách sẽ loại trừ các khóa tiêu đề HTTP này khỏi việc trở thành một phần trong phép tính để tạo bộ đệm ẩn cho dữ liệu.
-   `IsRetry` : Việc chỉ định giá trị lô-gic này là true sẽ bỏ qua mọi phản hồi hiện có trong bộ đệm ẩn khi tải dữ liệu.
-   `ManualStatusHandling` : Việc chỉ định giá trị này dưới dạng danh sách sẽ ngăn chặn mọi thao tác xử lý tích hợp sẵn cho các yêu cầu HTTP có phản hồi chứa một trong các mã trạng thái này.
-   `RelativePath` : Việc chỉ định giá trị này dưới dạng văn bản sẽ gắn kết giá trị với URL cơ sở trước khi thực hiện yêu cầu.
-   `Content` : Việc chỉ định giá trị này sẽ khiến nội dung của giá trị trở thành nội dung của yêu cầu HTTP.

Lưu ý rằng hàm này bị vô hiệu hóa ở hầu hết các ngữ cảnh. Hãy cân nhắc dùng Web.Contents thay thế.


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
