---
title: Binary.From
---

# Binary.From


Δημιουργεί μια δυαδική τιμή από την τιμή που δόθηκε


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Επιστρέφει μια τιμή `binary` από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Binary.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `δυαδικό`, επιστρέφεται `value`. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή `binary`:

-   `text`:: Μια τιμή `binary` από την αναπαράσταση κειμένου. Ανατρέξτε στο `Binary.FromText` για λεπτομέρειες.

Αν `value` είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1
Λάβετε την τιμή `binary` του `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
