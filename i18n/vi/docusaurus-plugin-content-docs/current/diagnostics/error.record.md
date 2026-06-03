---
title: Error.Record
---

# Error.Record


Trả về một bản ghi lỗi từ các giá trị văn bản được cung cấp về lý do, thông báo, chi tiết và mã lỗi.


## Syntax

```powerquery
Error.Record(
    reason as text,
    optional message as text,
    optional detail as any,
    optional parameters as list,
    optional errorCode as text
) as record
```


## Remarks

Trả về một bản ghi lỗi từ các giá trị văn bản được cung cấp về lý do, thông báo, chi tiết và mã lỗi.

-   `reason`: Nguyên nhân chính của lỗi.
-   `message`: (Tùy chọn) Mô tả lỗi.
-   `detail`: (Tùy chọn) Thông tin chi tiết bổ sung về lỗi.
-   `parameters`: (Tùy chọn) Danh sách các giá trị cung cấp ngữ cảnh bổ sung cho lỗi, thường dùng để chẩn đoán hoặc xử lý lập trình.
-   `errorCode`: (Tùy chọn) Mã định danh của lỗi.


## Examples

### Example #1
Xử lý lỗi chia cho số 0.
```powerquery
let
    input = 100,
    divisor = 0,
    result = try if divisor = 0 then
        error Error.Record(
            "DivideByZero",
            "You attempted to divide by zero."
        )
    else
        input / divisor
in
    result
```

Result: 
```powerquery
[
    HasError = true,
    Error =
    [
        Reason = "DivideByZero",
        Message = "You attempted to divide by zero.",
        Detail = null,
        Message.Format = null,
        Message.Parameters = null,
        ErrorCode = null
    ]
]
```


### Example #2
Xử lý mục nhập khi gặp lỗi ID khách hàng không tồn tại. Nếu không có lỗi, hãy thông báo mục nhập thành công.
```powerquery
let
    CustomerId = 12345,
    result = try if CustomerId > 9999 then
        error Error.Record(
            "CustomerNotFound",
            Text.Format("Customer ID #{0} wasn't found.", {CustomerId}),
            "Customer doesn't exist.",
            {
                Text.Format("Invalid ID = #{0}", {CustomerId}),
                "Valid IDs: https://api.contoso.com/customers"
            },
            "ERR404"
        )
    else CustomerId
in
    result
```

Result: 
```powerquery
[
    HasError = true,
    Error = [
        Reason = "CustomerNotFound",
        Message = "Customer ID 12345 wasn't found.",
        Detail = "Customer doesn't exist.",
        Message.Format = "Customer ID 12345 wasn't found.",
        Message.Parameters = {
            "Invalid ID = 12345",
            "Valid IDs: https://api.contoso.com/customers"
        },
        ErrorCode = "ERR404"
    ]
]
```




## Category
Error
