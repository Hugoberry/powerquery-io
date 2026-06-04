---
title: Error.Record
---

# Error.Record


Повертає запис помилки з наданих текстових значень із зазначеними причиною, повідомленням та подробицями, а також кодом помилки.


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

Повертає запис помилки з наданих текстових значень із зазначеними причиною, повідомленням та подробицями, а також кодом помилки.

-   `reason`: основна причина помилки.
-   `message`: (необов’язково) опис помилки.
-   `detail`: (необов’язково) додаткова детальна інформація про помилку.
-   `parameters`: (необов’язково) список значень, які надають додатковий контекст помилки, зазвичай використовується для діагностики або програмної обробки.
-   `errorCode`: (необов’язково) ідентифікатор помилки.


## Examples

### Example #1
Обробіть помилку ділення на нуль.
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
Обробіть запис із помилкою відсутнього ідентифікатора клієнта. Якщо помилка не виникає, укажіть успішне внесення запису.
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
