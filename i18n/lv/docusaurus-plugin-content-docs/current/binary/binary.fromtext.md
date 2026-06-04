---
title: Binary.FromText
---

# Binary.FromText


Datus no teksta formas dekodē binārajā formātā.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Atgriež rezultātu teksta vērtības `text` pārvēršanai par bināru vērtību (`number` saraksts). Var tikt iekļauts `encoding`, lai norādītu teksta vērtībai izmantoto kodējumu. Vērtībai `encoding` var izmantot tālāk norādītās `BinaryEncoding` vērtības.

-   `BinaryEncoding.Base64`: kodējums Base 64
-   `BinaryEncoding.Hex`: heksadecimālais kodējums


## Examples

### Example #1
Dekodēt 1011 par bināro vērtību.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Dekodēt 1011 par bināro vērtību, izmantojot heksadecimālo kodējumu.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
