---
title: Error.Record
---

# Error.Record


理由、メッセージ、詳細、エラー コードに対して指定されたテキスト値からエラー レコードを返します。


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

理由、メッセージ、詳細、エラー コードに対して指定されたテキスト値からエラー レコードを返します。

-   `reason`: エラーの主要な原因。
-   `message`: (省略可能) エラーの説明。
-   `detail`: (省略可能) エラーに関する追加情報。
-   `parameters`: (省略可能) エラーに関する追加のコンテキストを提供する値の一覧。通常は診断またはプログラムによる処理に使用されます。
-   `errorCode`: (省略可能) エラーの識別子。


## Examples

### Example #1
0 除算エラーを処理します。
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
存在しない顧客 ID のエラーが発生しているエントリを処理します。エラーが発生しなかった場合は、エントリが成功したことを示します。
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
