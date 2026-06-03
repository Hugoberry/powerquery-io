---
title: Error.Record
---

# Error.Record


Возвращает запись об ошибке из предоставленных текстовых значений с указанием причины, сообщения, сведений и кода ошибки.


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

Возвращает запись об ошибке из предоставленных текстовых значений с указанием причины, сообщения, сведений и кода ошибки.

-   `reason`: общая причина ошибки.
-   `message`: (необязательно) описание ошибки.
-   `detail`: (необязательно) дополнительные подробные сведения об ошибке.
-   `parameters`: (необязательно) список значений, которые предоставляют дополнительный контекст ошибки, обычно используемый для диагностики или программной обработки.
-   `errorCode`: (необязательно) идентификатор ошибки.


## Examples

### Example #1
Обработай ошибку деления на ноль.
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
Обработай запись с ошибкой несуществующего идентификатора клиента. Если ошибки не возникло, укажи успешное выполнение записи.
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
