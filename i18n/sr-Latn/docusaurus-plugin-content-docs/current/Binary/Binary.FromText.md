---
title: Binary.FromText
---

# Binary.FromText


## Description

Dekodira podatke iz tekstualne forme u binarnu.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Vraća rezultat konvertovanja tekstualne vrednosti <code>text</code> u binarnu (lista <code>number</code>). <code>encoding</code> može da bude navedena da bi ukazivala na kodiranje koje se koristi u tekstualnoj vrednosti.      Sledeće <code>BinaryEncoding</code> vrednosti se mogu koristiti za <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 kodiranje</li>        <li><code>BinaryEncoding.Hex</code>: Heksadecimalno kodiranje</li>      </ul>


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
