---
title: Binary.ToText
---

# Binary.ToText


## Description

Codifică datele binare într-un formular text.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Returnează rezultatul conversiei unei liste de numere binare <code>binary</code> într-o valoare text. Opțional, <code>encoding</code> poate fi specificat pentru a arăta codificarea care va fi utilizată în valoarea text produsă      Următoarele valori <code>BinaryEncoding</code> pot fi utilizate pentru <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificare în baza 64</li>        <li><code>BinaryEncoding.Hex</code>: codificare hexazecimală</li>      </ul>



## Category
Binary
