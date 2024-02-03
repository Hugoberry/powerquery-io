---
title: Binary.FromText
---

# Binary.FromText


## Description

Datus no teksta formas dekodē binārajā formātā.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Atgriež rezultātu teksta vērtības <code>text</code> pārvēršanai par bināru vērtību (<code>number</code> saraksts). Var tikt iekļauts <code>encoding</code>, lai norādītu teksta vērtībai izmantoto kodējumu.      Vērtībai <code>encoding</code> var izmantot tālāk norādītās <code>BinaryEncoding</code> vērtības.      <ul>        <li><code>BinaryEncoding.Base64</code>: kodējums Base 64</li>        <li><code>BinaryEncoding.Hex</code>: heksadecimālais kodējums</li>      </ul>


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
