---
title: Error.Record
---

# Error.Record


Retourne un enregistrement d’erreur à partir des valeurs de texte fournies pour la raison, le message, le détail et le code d’erreur.


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

Retourne un enregistrement d’erreur à partir des valeurs de texte fournies pour la raison, le message, le détail et le code d’erreur.

-   `reason` : Cause principale de l’erreur.
-   `message` :(Facultatif) Une description de l’erreur.
-   `detail` : (Facultatif) Informations détaillées supplémentaires sur l’erreur.
-   `parameters` : (Facultatif) Liste de valeurs fournissant un contexte supplémentaire pour l’erreur, généralement utilisée pour le diagnostic ou le traitement programmatique.
-   `errorCode` : (Facultatif) Identifiant de l’erreur.


## Examples

### Example #1
Gérer une erreur de division par zéro.
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
Gérer une entrée avec une erreur d’ID client non existant. Si aucune erreur ne survient, indiquez une entrée réussie.
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
