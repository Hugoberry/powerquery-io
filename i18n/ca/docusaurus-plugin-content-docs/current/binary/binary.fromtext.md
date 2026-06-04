---
title: Binary.FromText
---

# Binary.FromText


Descodifica dades d'una forma de text en binària.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Retorna el resultat de convertir el valor de text `text` en un binari (llista de `number`). `encoding` es pot especificar per indicar la codificació utilitzada al valor de text. Els valors `BinaryEncoding` següents es poden utilitzar per a `encoding`.

-   `BinaryEncoding.Base64`: codificació en base 64
-   `BinaryEncoding.Hex`: codificació hexadecimal


## Examples

### Example #1
Descodifica "1011" en binari.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Descodifica "1011" en binari amb codificació hexadecimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
