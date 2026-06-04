---
title: Error.Record
---

# Error.Record


Egy hibarekordot ad vissza az ok, üzenet, részletek és hibakódok megadott szöveges értékeiből.


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

Egy hibarekordot ad vissza az ok, az üzenet, a részletek és a hibakódok megadott szöveges értékeiből.

-   `reason`: A hiba magas szintű oka.
-   `message`: (Nem kötelező) A hiba leírása.
-   `detail`: (Nem kötelező) További részletes információ a hibáról.
-   `parameters`: (Nem kötelező) Az hiba további kontextusát biztosító értékek listája, amelyet általában diagnosztikai vagy programozási célokra használnak.
-   `errorCode`: (Nem kötelező) A hiba azonosítója.


## Examples

### Example #1
Kezeli a nullával való osztás hibáját.
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
Kezeli a nem létező ügyfélazonosító hibával rendelkező bejegyzést. Ha nem történik hiba, jelzi a sikeres bejegyzést.
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
