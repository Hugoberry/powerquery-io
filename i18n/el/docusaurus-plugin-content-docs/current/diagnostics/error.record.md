---
title: Error.Record
---

# Error.Record


Επιστρέφει μια εγγραφή σφάλματος από τις παρεχόμενες τιμές κειμένου για την αιτία, το μήνυμα, τις λεπτομέρειες και τον κωδικό σφάλματος.


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

Επιστρέφει μια εγγραφή σφάλματος από τις παρεχόμενες τιμές κειμένου για την αιτία, το μήνυμα, τις λεπτομέρειες και τον κωδικό σφάλματος.

-   `reason`: Η αιτία υψηλού επιπέδου του σφάλματος.
-   `message`: (Προαιρετικό) Περιγραφή του σφάλματος.
-   `detail`: (Προαιρετικό) Πρόσθετες λεπτομερείς πληροφορίες σχετικά με το σφάλμα.
-   `parameters`: (Προαιρετικό) Μια λίστα τιμών που παρέχουν πρόσθετο περιβάλλον για το σφάλμα, που χρησιμοποιείται συνήθως για διαγνωστικό ή προγραμματισμό χειρισμό.
-   `errorCode`: (Προαιρετικό) Ένα αναγνωριστικό για το σφάλμα.


## Examples

### Example #1
Χειρισμός σφάλματος διαίρεσης με το μηδέν.
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
Χειρισμός καταχώρησης με σφάλμα αναγνωριστικού πελάτη που δεν υπάρχει. Αν δεν παρουσιαστεί σφάλμα, υποδείξτε μια επιτυχημένη καταχώρηση.
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
