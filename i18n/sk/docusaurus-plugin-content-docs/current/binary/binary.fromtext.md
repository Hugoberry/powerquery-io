---
title: Binary.FromText
---

# Binary.FromText


Dekóduje údaje z textového formátu na binárny údaj.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Vráti výsledok konverzie textovej hodnoty `text` na binárny údaj (zoznam čísel `number`). Možno zadať hodnotu `encoding` s cieľom určiť kódovanie použité v textovej hodnote. Možno použiť nasledujúce hodnoty `BinaryEncoding` pre `encoding`.

-   `BinaryEncoding.Base64`: Kódovanie Base 64
-   `BinaryEncoding.Hex`: Hexadecimálne kódovanie


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
