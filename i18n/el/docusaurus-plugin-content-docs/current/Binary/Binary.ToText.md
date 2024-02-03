---
title: Binary.ToText
---

# Binary.ToText


## Description

Κωδικοποιεί δυαδικά δεδομένα σε μορφή κειμένου.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Επιστρέφει το αποτέλεσμα της μετατροπής μιας δυαδικής λίστας αριθμών <code>binary</code> σε τιμή κειμένου. Προαιρετικά, μπορεί να καθοριστεί η <code>encoding</code> για να υποδείξει την κωδικοποίηση που θα χρησιμοποιηθεί στην παραγόμενη τιμή κειμένου      Μπορούν να χρησιμοποιηθούν οι ακόλουθες τιμές της <code>BinaryEncoding</code> για την <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Κωδικοποίηση Base 64</li>        <li><code>BinaryEncoding.Hex</code>: Δεκαεξαδική κωδικοποίηση</li>      </ul>



## Category
Binary
