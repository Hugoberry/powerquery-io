---
title: Binary.View
---

# Binary.View


Tạo hoặc mở rộng nhị phân với trình xử lý do người dùng xác định cho các phép toán truy vấn và thao tác.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Trả về dạng xem <code>binary</code> khi hàm được chỉ định trong <code>handlers</code> được sử dụng thay cho hành vi mặc định của một thao tác khi thao tác được áp dụng cho dạng xem.<br />Nếu <code>binary</code> được cung cấp, tất cả hàm trình điều khiển đều không bắt buộc. Nếu <code>binary</code> không được cung cấp, yêu cầu có các hàm trình điều khiển <code>GetStream</code>. Nếu hàm trình điều khiển không được chỉ định cho một thao tác, hành vi mặc định của thao tác được áp dụng cho <code>binary</code> (trừ trường hợp <code>GetExpression</code>).<br />Các hàm trình điều khiển phải trả về giá trị tương đương về mặt ngữ nghĩa với kết quả áp dụng thao tác dựa trên <code>binary</code> (hoặc dạng xem có được trong trường hợp <code>GetExpression</code>).<br />Nếu hàm trình điều khiển phát sinh lỗi, hành vi mặc định của thao tác được áp dụng cho dạng xem.<br /><code>Binary.View</code> có thể được sử dụng để triển khai việc gộp vào nguồn dữ liệu – bản dịch của truy vấn M sang phép toán theo nguồn (ví dụ: để tải xuống một phần của tệp).<br />Tham khảo tài liệu về trình kết nối tùy chỉnh Power Query để biết mô tả đầy đủ hơn về <code>Binary.View</code>.<br />


## Examples

### Example #1 
Tạo dạng xem cơ bản không yêu cầu truy nhập dữ liệu để xác định độ dài.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
