---
title: Binary.FromText
---

# Binary.FromText


Dekodira podatke iz tekstualne forme u binarnu.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Vraća rezultat konvertovanja tekstualne vrednosti `text` u binarnu (lista `number`). `encoding` može da bude navedena da bi ukazivala na kodiranje koje se koristi u tekstualnoj vrednosti. Sledeće `BinaryEncoding` vrednosti se mogu koristiti za `encoding`.

-   `BinaryEncoding.Base64`: Base 64 kodiranje
-   `BinaryEncoding.Hex`: Heksadecimalno kodiranje


## Examples

### Example #1
Dekodiranje sekvence „1011“ u binarni oblik.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Dekodiranje sekvence „1011“ u binarni oblik pomoću heksadecimalnog kodiranja.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
