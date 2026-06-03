---
title: Error.Record
---

# Error.Record


Devuelve un registro de error de los valores de texto proporcionados por motivo, mensaje, detalle y código de error.


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

Devuelve un registro de error de los valores de texto proporcionados por motivo, mensaje, detalle y código de error.

-   `reason`: la causa de alto nivel del error.
-   `message`: (Opcional) Una descripción del error.
-   `detail`: (Opcional) Información detallada adicional sobre el error.
-   `parameters`: (Opcional) Una lista de valores que proporcionan contexto adicional para el error, que normalmente se usa para el diagnóstico o el control mediante programación.
-   `errorCode`: (Opcional) Un identificador del error.


## Examples

### Example #1
Controlar un error de división por cero.
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
Controlar una entrada con un error de id. de cliente inexistente. Si no se produce ningún error, indique una entrada correcta.
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
