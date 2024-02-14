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

Devolve o resultado da conversão do valor de texto <code>text</code> num valor binário (lista de valores <code>number</code>). <code>encoding</code> pode ser especificado para indicar a codificação utilizada no valor de texto.      Os valores <code>BinaryEncoding</code> que se seguem podem ser utilizados para <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificação Base 64</li>        <li><code>BinaryEncoding.Hex</code>: codificação hexadecimal</li>      </ul>


## Examples

### Example #1 
Descodificar &#34;1011&#34; para o formato binário.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Descodificar &#34;1011&#34; para o formato binário com codificação hexadecimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
