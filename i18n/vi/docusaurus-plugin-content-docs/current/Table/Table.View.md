---
title: Table.View
---

# Table.View


Tạo hoặc mở rộng bảng với trình xử lý do người dùng xác định cho các phép toán truy vấn và thao tác.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Trả về dạng xem <code>table</code> khi hàm được chỉ định trong <code>handlers</code> được sử dụng thay cho hành vi mặc định của một thao tác khi thao tác được áp dụng cho dạng xem.<br />Nếu <code>table</code> được cung cấp, tất cả hàm trình điều khiển đều không bắt buộc. Nếu <code>table</code> không được cung cấp, yêu cầu có các hàm trình điều khiển <code>GetType</code> và <code>GetRows</code>. Nếu hàm trình điều khiển không được chỉ định cho một thao tác, hành vi mặc định của thao tác được áp dụng cho <code>table</code> (trừ trường hợp <code>GetExpression</code>).<br />Các hàm trình điều khiển phải trả về giá trị tương đương về mặt ngữ nghĩa với kết quả áp dụng thao tác dựa trên <code>table</code> (hoặc dạng xem có được trong trường hợp <code>GetExpression</code>).<br />Nếu hàm trình điều khiển phát sinh lỗi, hành vi mặc định của thao tác được áp dụng cho dạng xem.<br /><code>Table.View</code> có thể được sử dụng để triển khai việc gộp vào nguồn dữ liệu – bản dịch của truy vấn M sang truy vấn theo nguồn (ví dụ: để tạo câu lệnh T-SQL từ truy vấn M).<br />Tham khảo tài liệu về trình kết nối tùy chỉnh Power Query để biết mô tả đầy đủ hơn về <code>Table.View</code>.<br />


## Examples

### Example #1 
Tạo dạng xem cơ bản không yêu cầu truy nhập hàng theo thứ tự để xác định loại hoặc số lượng hàng.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
