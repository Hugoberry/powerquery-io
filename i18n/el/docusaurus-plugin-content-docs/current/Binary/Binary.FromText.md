---
title: Binary.FromText
---

# Binary.FromText


## Description

Αποκωδικοποιεί δεδομένα από μια μορφή κειμένου σε δυαδική μορφή.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Επιστρέφει το αποτέλεσμα της μετατροπής της τιμής κειμένου <code>text</code> σε δυαδική μορφή (λίστα του <code>number</code>). Μπορεί να καθοριστεί η <code>encoding</code> για να υποδείξει την κωδικοποίηση που χρησιμοποιείται στην τιμή κειμένου.      Μπορούν να χρησιμοποιηθούν οι ακόλουθες τιμές της <code>BinaryEncoding</code> για την <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Κωδικοποίηση Base 64</li>        <li><code>BinaryEncoding.Hex</code>: Δεκαεξαδική κωδικοποίηση</li>      </ul>


## Examples

### Example #1 
Αποκωδικοποίηση του &#34;1011&#34; σε δυαδική μορφή.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Αποκωδικοποίηση του &#34;1011&#34; σε δυαδική μορφή με δεκαεξαδική κωδικοποίηση.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
