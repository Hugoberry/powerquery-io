---
title: Error.Record
---

# Error.Record


Vrne zapis o napaki iz navedenih besedilnih vrednosti za razlog, sporočilo, podrobnosti in kodo napake.


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

Vrne zapis o napaki iz navedenih besedilnih vrednosti za razlog, sporočilo, podrobnosti in kodo napake.

-   `reason`: Glavni vzrok napake.
-   `message`: (izbirno) Opis napake.
-   `detail`: (izbirno) Dodatne podrobne informacije o napaki.
-   `parameters`: (izbirno) Seznam vrednosti, ki zagotavljajo dodaten kontekst za napako, običajno za diagnostiko ali programsko obravnavo.
-   `errorCode`: (izbirno) Identifikator napake.


## Examples

### Example #1
Obravnavajte napako deljenja z nič.
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
Obravnava vnosa z napako neobstoječega ID-ja stranke. Če ne pride do napake, označite uspešen vnos.
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
