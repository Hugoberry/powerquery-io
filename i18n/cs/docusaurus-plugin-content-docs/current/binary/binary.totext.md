---
title: Binary.ToText
---

# Binary.ToText


Zakóduje binární data do textového formátu.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

Vrátí výsledek převodu binárního seznamu čísel `binary` na textovou hodnotu. Volitelně může být zadán i parametr `encoding`, který označuje kódování použité ve vrácené textové hodnotě. Pro parametr `encoding` lze použít následující hodnoty `BinaryEncoding`.

-   `BinaryEncoding.Base64`: Kódování Base 64
-   `BinaryEncoding.Hex`: Šestnáctkové kódování



## Category
Binary
