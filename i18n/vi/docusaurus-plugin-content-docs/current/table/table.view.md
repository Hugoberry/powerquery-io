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

Trả về dạng xem `table` khi hàm được chỉ định trong `handlers` được sử dụng thay cho hành vi mặc định của một thao tác khi thao tác được áp dụng cho dạng xem.

Nếu `table` được cung cấp, tất cả hàm trình điều khiển đều không bắt buộc. Nếu `table` không được cung cấp, yêu cầu có các hàm trình điều khiển `GetType` và `GetRows`. Nếu hàm trình điều khiển không được chỉ định cho một thao tác, hành vi mặc định của thao tác được áp dụng cho `table` (trừ trường hợp `GetExpression`).

Các hàm trình điều khiển phải trả về giá trị tương đương về mặt ngữ nghĩa với kết quả áp dụng thao tác dựa trên `table` (hoặc dạng xem có được trong trường hợp `GetExpression`).

Nếu hàm trình điều khiển phát sinh lỗi, hành vi mặc định của thao tác được áp dụng cho dạng xem.

`Table.View` có thể được sử dụng để triển khai việc gộp vào nguồn dữ liệu – bản dịch của truy vấn M sang truy vấn theo nguồn (ví dụ: để tạo câu lệnh T-SQL từ truy vấn M).

Tham khảo tài liệu về trình kết nối tùy chỉnh Power Query để biết mô tả đầy đủ hơn về `Table.View`.


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
