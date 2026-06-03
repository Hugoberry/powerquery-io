---
title: Binary.FromText
---

# Binary.FromText


Descodifica datos de un formato de texto en binario.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Devuelve el resultado de convertir el valor de texto `text` en un binario (lista de `number`). `encoding` se puede especificar para indicar la codificación usada en el valor text. Los siguientes valores `BinaryEncoding` se pueden usar para `encoding`.

-   `BinaryEncoding.Base64`: codificación Base 64.
-   `BinaryEncoding.Hex`: codificación hexadecimal


## Examples

### Example #1
Descodificar “1011” en binario.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Descodificar “1011” en binario con la codificación hexadecimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
