---
title: Binary.FromText
---

# Binary.FromText


## Description

Descodifica datos a partir dun formato de texto en binario.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Devolve o resultado de converter o valor de texto <code>text</code> nun binario (lista de <code>number</code>). Pódese especificar <code>encoding</code> para indicar a codificación usada no valor de texto.      Pódense usar os seguintes valores <code>BinaryEncoding</code> para <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificación base 64</li>        <li><code>BinaryEncoding.Hex</code>: codificación Hex</li>      </ul>


## Examples

### Example #1 
Descodificar &#34;1011&#34; en binario.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Descodificar &#34;1011&#34; en binario con codificación Hex.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
