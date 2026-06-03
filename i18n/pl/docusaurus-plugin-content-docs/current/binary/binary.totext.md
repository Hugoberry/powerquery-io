---
title: Binary.ToText
---

# Binary.ToText


Koduje dane binarne w formie tekstowej.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Zwraca wynik konwersji binarnej listy liczb `binary` na wartość tekstową. Opcjonalnie można określić parametr `encoding` w celu wskazania kodowania, które ma być używane w tworzonej wartości tekstowej. W parametrze `encoding` można użyć następujących wartości `BinaryEncoding`.

-   `BinaryEncoding.Base64`: kodowanie Base 64.
-   `BinaryEncoding.Hex`: kodowanie szesnastkowe.



## Category
Binary
