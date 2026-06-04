---
title: Error.Record
---

# Error.Record


지정된 이유, 메시지, 세부 정보 및 오류 코드에 대한 텍스트 값에서 오류 레코드를 반환합니다.


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

지정된 이유, 메시지, 세부 정보 및 오류 코드에 대한 텍스트 값에서 오류 레코드를 반환합니다.

-   `reason`: 오류의 상위 수준 원인입니다.
-   `message`: (선택 사항) 오류에 대한 설명입니다.
-   `detail`: (선택 사항) 오류에 대한 추가 세부 정보입니다.
-   `parameters`: (선택 사항) 오류에 대한 추가 컨텍스트를 제공하는 값 목록으로, 일반적으로 진단 또는 프로그래밍 방식 처리에 사용됩니다.
-   `errorCode`: (선택 사항) 오류의 식별자입니다.


## Examples

### Example #1
0으로 나누기 오류를 처리합니다.
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
존재하지 않는 고객 ID 오류가 있는 항목을 처리합니다. 오류가 발생하지 않으면 성공적인 항목을 표시합니다.
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
