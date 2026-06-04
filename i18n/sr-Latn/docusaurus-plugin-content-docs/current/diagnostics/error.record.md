---
title: Error.Record
---

# Error.Record


Vraća zapis o grešci od navedenih tekstualnih vrednosti za razlog, poruku, detalj i kod greške.


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

Vraća zapis o grešci od navedenih tekstualnih vrednosti za razlog, poruku, detalj i kod greške.

-   `reason`: Glavni uzrok greške.
-   `message`: (Opcionalno) Opis greške.
-   `detail`: (Opcionalno) Dodatne detaljne informacije o grešci.
-   `parameters`: (Opcionalno) Lista vrednosti koje navode dodatni kontekst za grešku, koja se obično koristi za dijagnostiku ili programsko rukovanje.
-   `errorCode`: (Opcionalno) Identifikator greške.


## Examples

### Example #1
Obradite grešku „Deljenje sa nulom“
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
Obradite unos sa greškom nepostojećeg ID-a klijenta. Ako ne dođe do greške, naznačite uspešnu stavku.
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
