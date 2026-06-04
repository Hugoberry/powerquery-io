---
title: Error.Record
---

# Error.Record


Retorna un registre d'error dels valors de text proporcionats per a motiu, missatge, detall i codi d'error.


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

Retorna un registre d'error dels valors de text proporcionats per a motiu, missatge, detall i codi d'error.

-   `reason`: causa general de l'error.
-   `message`: (Opcional) descripció de l'error.
-   `detail`: (Opcional) informació addicional detallada sobre l'error.
-   `parameters`: (Opcional) una llista de valors que proporciona context addicional per a l'error, que normalment s'utilitza per a diagnòstics o gestió programàtica.
-   `errorCode`: (Opcional) identificador de l'error.


## Examples

### Example #1
Controla un error de divisió per zero.
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
Gestiona una entrada amb un error d'ID de client que no existeix. El fet que no es produeixi cap error, indica que l'entrada s'ha fet correctament.
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
