---
title: Binary.ToText
---

# Binary.ToText


Kodira binarne podatke u tekstualni oblik.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Vraća rezultat konvertovanja binarne liste brojeva `binary` u tekstualnu vrednost. Opcionalno, `encoding` može da bude naveden da bi ukazivao na kodiranje koje treba koristiti u dobijenoj tekstualnoj vrednosti Sledeće `BinaryEncoding` vrednosti se mogu koristiti za `encoding`.

-   `BinaryEncoding.Base64`: Base 64 kodiranje
-   `BinaryEncoding.Hex`: Heksadecimalno kodiranje



## Category
Binary
