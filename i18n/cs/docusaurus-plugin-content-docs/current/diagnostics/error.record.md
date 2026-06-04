---
title: Error.Record
---

# Error.Record


Vrátí záznam chyby z poskytnutých textových hodnot obsahující informaci o příčině, zprávu, podrobnosti a kód chyby.


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

Vrátí záznam chyby z poskytnutých textových hodnot obsahující informaci o příčině, zprávu, podrobnosti a kód chyby.

-   `reason`: Hlavní příčina chyby.
-   `message`: (Volitelné) Popis chyby.
-   `detail`: (Volitelné) Další podrobné informace o chybě.
-   `parameters`: (Volitelné) Seznam hodnot, které poskytují další kontext chyby, který se obvykle používá pro diagnostiku nebo programové zpracování.
-   `errorCode`: (Volitelné) Identifikátor chyby.


## Examples

### Example #1
Zpracování chyby dělení nulou.
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
Zpracování položky s neexistující chybou ID zákazníka. Pokud nedojde k žádné chybě, uveďte úspěšnou položku.
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
