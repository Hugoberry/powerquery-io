---
title: Binary.ToText
---

# Binary.ToText


Κωδικοποιεί δυαδικά δεδομένα σε μορφή κειμένου.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της μετατροπής μιας δυαδικής λίστας αριθμών `binary` σε τιμή κειμένου. Προαιρετικά, μπορεί να καθοριστεί η `encoding` για να υποδείξει την κωδικοποίηση που θα χρησιμοποιηθεί στην παραγόμενη τιμή κειμένου Μπορούν να χρησιμοποιηθούν οι ακόλουθες τιμές της `BinaryEncoding` για την `encoding`.

-   `BinaryEncoding.Base64`: Κωδικοποίηση Base 64
-   `BinaryEncoding.Hex`: Δεκαεξαδική κωδικοποίηση



## Category
Binary
