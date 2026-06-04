---
title: Binary.ToText
---

# Binary.ToText


Kóduje binárne údaje na textový formát.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Vráti výsledok konverzie binárneho zoznamu čísel `binary` na textovú hodnotu. Voliteľne možno zadať hodnotu `encoding` s cieľom určiť kódovanie, ktoré sa má použiť vo vytvorenej textovej hodnote Možno použiť nasledujúce hodnoty `BinaryEncoding` pre `encoding`.

-   `BinaryEncoding.Base64`: Kódovanie Base 64
-   `BinaryEncoding.Hex`: Hexadecimálne kódovanie



## Category
Binary
