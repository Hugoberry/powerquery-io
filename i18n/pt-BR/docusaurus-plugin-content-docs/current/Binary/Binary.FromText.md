---
title: Binary.FromText
---

# Binary.FromText


## Description

Decodifica dados de um formato de texto em binário.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Retorna o resultado da conversão do valor de texto <code>text</code> em binário (lista de <code>number</code>). <code>encoding</code> pode ser especificado para indicar a codificação usada no valor de texto.      Os valores <code>BinaryEncoding</code> a seguir podem ser usados para <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificação de base 64</li>        <li><code>BinaryEncoding.Hex</code>: codificação hexadecimal</li>      </ul>


## Examples

### Example #1 
Decodifique &#34;1011&#34; em binário.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Decodifique &#34;1011&#34; em binário com codificação hexadecimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
