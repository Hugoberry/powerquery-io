---
title: Error.Record
---

# Error.Record


Devolve un rexistro de erros dos valores de texto fornecidos por motivo, mensaxe, detalles e código de erro.


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

Devolve un rexistro de erros dos valores de texto fornecidos por motivo, mensaxe, detalles e código de erro.

-   `reason`: a causa principal do erro.
-   `message`: (opcional) unha descrición do erro.
-   `detail`: (opcional) información detallada adicional sobre o erro.
-   `parameters`: (opcional) unha lista de valores que achegan contexto adicional ao erro, normalmente usada para diagnóstico ou xestión programática.
-   `errorCode`: (opcional) un identificador do erro.


## Examples

### Example #1
Xestiona un erro de división por cero.
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
Manexa unha entrada cun erro de ID de cliente inexistente. Se non hai erro, indica que a entrada se realizou correctamente.
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
