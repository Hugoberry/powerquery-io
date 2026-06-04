---
title: Binary.ToText
---

# Binary.ToText


Codifică datele binare într-un formular text.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Returnează rezultatul conversiei unei liste de numere binare `binary` într-o valoare text. Opțional, `encoding` poate fi specificat pentru a arăta codificarea care va fi utilizată în valoarea text produsă Următoarele valori `BinaryEncoding` pot fi utilizate pentru `encoding`.

-   `BinaryEncoding.Base64`: codificare în baza 64
-   `BinaryEncoding.Hex`: codificare hexazecimală



## Category
Binary
