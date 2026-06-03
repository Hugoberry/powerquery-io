---
title: Error.Record
---

# Error.Record


Restituisce un record di errore dai valori di testo specificati per motivo, messaggio, dettagli e codice di errore.


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

Restituisce un record di errore dai valori di testo specificati per motivo, messaggio, dettagli e codice di errore.

-   `reason`: causa principale dell'errore.
-   `message`: (facoltativo) descrizione dell'errore.
-   `detail`: (facoltativo) altre informazioni dettagliate sull'errore.
-   `parameters`: (facoltativo) elenco di valori che forniscono contesto aggiuntivo per l'errore, solitamente usati per la diagnostica o la gestione programmatica.
-   `errorCode`: (facoltativo) identificatore dell'errore.


## Examples

### Example #1
Gestire un errore di divisione per zero.
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
Gestire una voce con un errore di ID cliente inesistente. Se non si verifica alcun errore, indicare che l'inserimento è riuscito.
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
