---
title: Error.Record
---

# Error.Record


Devolve um registo de erro a partir dos valores de texto fornecidos para o motivo, mensagem, detalhes e código de erro.


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

Devolve um registo de erro a partir dos valores de texto fornecidos para o motivo, mensagem, detalhes e código de erro.

-   `reason`: a causa de alto nível do erro.
-   `message`: (Opcional) Uma descrição do erro.
-   `detail`: (Opcional) Informação detalhada adicional sobre o erro.
-   `parameters`: (Opcional) Uma lista de valores que fornecem contexto adicional para o erro, normalmente utilizada para diagnósticos ou tratamento programático.
-   `errorCode`: (Opcional) Um identificador para o erro.


## Examples

### Example #1
Tratar um erro de divisão por zero.
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
Trate uma entrada com um erro de ID de cliente inexistente. Se não ocorrer nenhum erro, indique uma entrada bem-sucedida.
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
