---
title: Error.Record
---

# Error.Record


Retourneert een foutrecord uit de opgegeven tekstwaarden voor reden, bericht, details en foutcode.


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

Retourneert een foutrecord uit de opgegeven tekstwaarden voor reden, bericht, details en foutcode.

-   `reason`: De hoofdoorzaak van de fout.
-   `message`: (Optioneel) Een beschrijving van de fout.
-   `detail`: (Optioneel) Aanvullende gedetailleerde informatie over de fout.
-   `parameters`: (Optioneel) Een lijst met waarden die extra context bieden over de fout, meestal gebruikt voor diagnostische gegevens of programmatische verwerking.
-   `errorCode`: (Optioneel) Een aanduiding voor de fout.


## Examples

### Example #1
Verwerk een delen door nul fout.
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
Verwerk een vermelding met een fout vanwege een niet-bestaand klant-id. Als er geen fout optreedt, geeft u een geslaagde vermelding aan.
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
