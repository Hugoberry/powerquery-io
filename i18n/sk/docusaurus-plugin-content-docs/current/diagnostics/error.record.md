---
title: Error.Record
---

# Error.Record


Vráti záznam chyby z poskytnutých textových hodnôt pre dôvod, správu, podrobnosti a kód chyby.


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

Vráti záznam chyby z poskytnutých textových hodnôt pre dôvod, správu, podrobnosti a kód chyby.

-   `reason`: Vysokoúrovňová príčina chyby.
-   `message`: (Voliteľné) Popis chyby.
-   `detail`: (Voliteľné) Ďalšie podrobné informácie o chybe.
-   `parameters`: (Voliteľné) Zoznam hodnôt, ktoré poskytujú dodatočný kontext chyby, zvyčajne používaný na diagnostiku alebo programové spracovanie.
-   `errorCode`: (Voliteľné) Identifikátor chyby.


## Examples

### Example #1
Spracovanie chyby delenia nulou.
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
Spracujte záznam s chybou neexistujúceho ID zákazníka. Ak sa nevyskytne žiadna chyba, označte úspešnú položku.
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
