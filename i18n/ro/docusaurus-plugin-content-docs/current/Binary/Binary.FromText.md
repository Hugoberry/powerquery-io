---
title: Binary.FromText
---

# Binary.FromText


## Description

Decodifică datele dintr-un formular text într-o valoare binary.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Returnează rezultatul conversiei valorii text <code>text</code> într-o valoare binară (listă de <code>number</code>). <code>encoding</code> poate fi specificat pentru indicarea codificării utilizate în valoarea text.      Următoarele valori <code>BinaryEncoding</code> pot fi utilizate pentru <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificare în baza 64</li>        <li><code>BinaryEncoding.Hex</code>: codificare hexazecimală</li>      </ul>


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
