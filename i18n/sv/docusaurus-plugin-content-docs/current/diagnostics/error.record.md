---
title: Error.Record
---

# Error.Record


Returnerar en felpost från de angivna textvärdena av orsak, meddelande, information och felkod.


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

Returnerar en felpost från de angivna textvärdena av orsak, meddelande, information och felkod.

-   `reason`: Den övergripande orsaken till felet.
-   `message`: (Valfritt) En beskrivning av felet.
-   `detail`: (Valfritt) Ytterligare detaljerad information om felet.
-   `parameters`: (Valfritt) En lista med värden som ger ytterligare kontext för felet, som vanligtvis används för diagnostik eller programmatisk hantering.
-   `errorCode`: (Valfritt) En identifierare för felet.


## Examples

### Example #1
Hantera ett fel vid division med noll.
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
Hantera en post med ett obefintlig kund-ID-fel. Om inget fel inträffar anger du att posten lyckades.
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
