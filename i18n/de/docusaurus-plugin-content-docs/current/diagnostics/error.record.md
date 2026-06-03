---
title: Error.Record
---

# Error.Record


Gibt auf der Grundlage der angegebenen Textwerte für Ursache, Nachricht und Details und Fehlercode einen Fehlerdatensatz zurück.


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

Gibt auf der Grundlage der angegebenen Textwerte für Ursache, Nachricht und Details und Fehlercode einen Fehlerdatensatz zurück.

-   `reason`: Die übergeordnete Ursache des Fehlers.
-   `message`: (Optional) Eine Beschreibung des Fehlers.
-   `detail`: (Optional) Zusätzliche detaillierte Informationen zum Fehler.
-   `parameters`: (Optional) Eine Liste von Werten, die zusätzlichen Kontext für den Fehler bereitstellen, der in der Regel für die Diagnose oder programmgesteuerte Behandlung verwendet wird.
-   `errorCode`: (Optional) Ein Bezeichner für den Fehler.


## Examples

### Example #1
Umgang mit einem Fehler bei Division durch 0 (null).
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
Umgang mit einem Eintrag mit einem nicht vorhandenen Kunden-ID-Fehler. Wenn kein Fehler auftritt, geben Sie einen erfolgreichen Eintrag an.
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
