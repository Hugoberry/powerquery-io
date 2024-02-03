---
title: Binary.FromText
---

# Binary.FromText


## Description

Dekóduje údaje z textového formátu na binárny údaj.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Vráti výsledok konverzie textovej hodnoty <code>text</code> na binárny údaj (zoznam čísel <code>number</code>). Možno zadať hodnotu <code>encoding</code> s cieľom určiť kódovanie použité v textovej hodnote.      Možno použiť nasledujúce hodnoty <code>BinaryEncoding</code> pre <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Kódovanie Base 64</li>        <li><code>BinaryEncoding.Hex</code>: Hexadecimálne kódovanie</li>      </ul>


## Examples

### Example #1 
Dekódujte hodnotu 1011 na binárny údaj.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Dekódujte hodnotu 1011 na binárny údaj s hexadecimálnym kódovaním.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
