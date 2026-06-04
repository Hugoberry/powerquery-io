---
title: Error.Record
---

# Error.Record


Atgriež kļūdas ierakstu no sniegtajām teksta vērtībām attiecībā uz iemeslu, ziņojumu, detalizētu informāciju un kļūdas kodu.


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

Atgriež kļūdas ierakstu no sniegtajām teksta vērtībām attiecībā uz iemeslu, ziņojumu, detalizētu informāciju un kļūdas kodu.

-   `reason`: kļūdas augsta līmeņa cēlonis.
-   `message`: (neobligāti) kļūdas apraksts.
-   `detail`: (neobligāti) papildu detalizēta informācija par kļūdu.
-   `parameters`: (neobligāti) vērtību saraksts, kas sniedz papildu kontekstu kļūdai, parasti izmanto diagnostikai vai programmatiskai apstrādei.
-   `errorCode`: (neobligāti) kļūdas identifikators.


## Examples

### Example #1
Apstrādāt dalīšanas ar nulli kļūdu.
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
Apstrādājiet ierakstu ar neesoša klienta ID kļūdu. Ja kļūda nenotiek, norādiet, ka ieraksts ir veiksmīgs.
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
