---
title: Binary.FromText
---

# Binary.FromText


Αποκωδικοποιεί δεδομένα από μια μορφή κειμένου σε δυαδική μορφή.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Επιστρέφει το αποτέλεσμα της μετατροπής της τιμής κειμένου `text` σε δυαδική μορφή (λίστα του `number`). Μπορεί να καθοριστεί η `encoding` για να υποδείξει την κωδικοποίηση που χρησιμοποιείται στην τιμή κειμένου. Μπορούν να χρησιμοποιηθούν οι ακόλουθες τιμές της `BinaryEncoding` για την `encoding`.

-   `BinaryEncoding.Base64`: Κωδικοποίηση Base 64
-   `BinaryEncoding.Hex`: Δεκαεξαδική κωδικοποίηση


## Examples

### Example #1
Αποκωδικοποίηση του "1011" σε δυαδική μορφή.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Αποκωδικοποίηση του "1011" σε δυαδική μορφή με δεκαεξαδική κωδικοποίηση.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
