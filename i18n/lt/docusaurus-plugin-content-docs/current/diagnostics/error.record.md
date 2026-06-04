---
title: Error.Record
---

# Error.Record


Pateikiamas klaidos įrašas iš pateiktų teksto reikšmių, skirtas priežasčiai, pranešimui, išsamiai informacijai ir klaidos kodui.


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

Pateikiamas klaidos įrašas iš pateiktų teksto reikšmių, skirtas priežasčiai, pranešimui, išsamiai informacijai ir klaidos kodui.

-   `reason`: aukšto lygio klaidos priežastis.
-   `message`: (pasirinktinai) klaidos aprašas.
-   `detail`: (pasirinktinai) papildoma išsami informacija apie klaidą.
-   `parameters`: (pasirinktinai) reikšmių sąrašas, kuriame pateikiamas papildomas klaidos kontekstas, paprastai naudojamas diagnostikai arba programiniam apdorojimui.
-   `errorCode`: (pasirinktinai) klaidos identifikatorius.


## Examples

### Example #1
Tvarkyti dalybos iš nulio klaidą.
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
Tvarkyti įrašą, kai įvyksta klaida dėl neegzistuojančio kliento ID. Jei klaidų nėra, nurodyti, kad įrašas sėkmingas.
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
