---
title: Binary.FromText
---

# Binary.FromText


Descodifica dados de um formato de texto para um formato binário.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Devolve o resultado da conversão do valor de texto `text` num valor binário (lista de valores `number`). `encoding` pode ser especificado para indicar a codificação utilizada no valor de texto. Os valores `BinaryEncoding` que se seguem podem ser utilizados para `encoding`.

-   `BinaryEncoding.Base64`: codificação Base 64
-   `BinaryEncoding.Hex`: codificação hexadecimal


## Examples

### Example #1
Descodificar "1011" para o formato binário.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Descodificar "1011" para o formato binário com codificação hexadecimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
