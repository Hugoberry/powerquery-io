---
title: Binary.FromText
---

# Binary.FromText


Decodifică datele dintr-un formular text într-o valoare binary.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returnează rezultatul conversiei valorii text `text` într-o valoare binară (listă de `number`). `encoding` poate fi specificat pentru indicarea codificării utilizate în valoarea text. Următoarele valori `BinaryEncoding` pot fi utilizate pentru `encoding`.

-   `BinaryEncoding.Base64`: codificare în baza 64
-   `BinaryEncoding.Hex`: codificare hexazecimală


## Examples

### Example #1
Decodificaţi „1011” în valoare binary.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Decodificaţi „1011” în valoare binary cu codificare hexazecimală.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
