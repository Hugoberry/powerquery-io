---
title: Binary.ToText
---

# Binary.ToText


## Description

Kóduje binárne údaje na textový formát.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Vráti výsledok konverzie binárneho zoznamu čísel <code>binary</code> na textovú hodnotu. Voliteľne možno zadať hodnotu <code>encoding</code> s cieľom určiť kódovanie, ktoré sa má použiť vo vytvorenej textovej hodnote      Možno použiť nasledujúce hodnoty <code>BinaryEncoding</code> pre <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Kódovanie Base 64</li>        <li><code>BinaryEncoding.Hex</code>: Hexadecimálne kódovanie</li>      </ul>



## Category
Binary
