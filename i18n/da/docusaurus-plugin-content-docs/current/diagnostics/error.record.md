---
title: Error.Record
---

# Error.Record


Returnerer en fejlpost fra de angivne tekstværdier for årsag, meddelelse, detaljer og fejlkode.


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

Returnerer en fejlpost fra de angivne tekstværdier for årsag, meddelelse, detaljer og fejlkode.

-   `reason`: Den overordnede årsag til fejlen.
-   `message`: (Valgfrit) En beskrivelse af fejlen.
-   `detail`: (Valgfrit) Yderligere detaljerede oplysninger om fejlen.
-   `parameters`: (Valgfrit) En liste over værdier, der giver yderligere kontekst til fejlen, som typisk bruges til diagnosticering eller programmatisk håndtering.
-   `errorCode`: (Valgfrit) Et id for fejlen.


## Examples

### Example #1
Håndtér en division med nul fejl.
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
Håndter en post med fejlen En ikke-eksisterende kunde-id. Hvis der ikke opstår nogen fejl, skal du angive posten som vellykket.
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
