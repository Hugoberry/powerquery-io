---
title: Binary.FromText
---

# Binary.FromText


Descodifica datos a partir dun formato de texto en binario.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Devolve o resultado de converter o valor de texto `text` nun binario (lista de `number`). Pódese especificar `encoding` para indicar a codificación usada no valor de texto. Pódense usar os seguintes valores `BinaryEncoding` para `encoding`.

-   `BinaryEncoding.Base64`: codificación base 64
-   `BinaryEncoding.Hex`: codificación Hex


## Examples

### Example #1
Descodificar "1011" en binario.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Descodificar "1011" en binario con codificación Hex.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
