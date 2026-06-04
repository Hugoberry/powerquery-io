---
title: Error.Record
---

# Error.Record


根據提供的文字值傳回錯誤記錄，以取得原因、訊息、詳細資料和錯誤碼。


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

根據提供的文字值傳回錯誤記錄，以取得原因、訊息、詳細資料和錯誤碼。

-   `reason`: 錯誤的高階原因。
-   `message`: (選用) 錯誤的描述。
-   `detail`: (選用) 關於錯誤的其他詳細資訊。
-   `parameters`: (選擇) 提供錯誤其他內容的值清單，通常用於診斷或程式設計處理。
-   `errorCode`: (選用) 錯誤的識別碼。


## Examples

### Example #1
處理除以零錯誤。
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
處理具有不存在的客戶識別碼的項目錯誤。如果沒有發生錯誤，表示輸入成功。
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
