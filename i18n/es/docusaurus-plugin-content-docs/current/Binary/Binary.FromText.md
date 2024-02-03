---
title: Binary.FromText
---

# Binary.FromText


## Description

Descodifica datos de un formato de texto en binario.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Devuelve el resultado de convertir el valor de texto <code>text</code> en un binario (lista de <code>number</code>). <code>encoding</code> se puede especificar para indicar la codificación usada en el valor text.      Los siguientes valores <code>BinaryEncoding</code> se pueden usar para <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificación Base 64.</li>        <li><code>BinaryEncoding.Hex</code>: codificación hexadecimal</li>      </ul>


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
