---
title: Binary.FromText
---

# Binary.FromText


## Description

Descodifica dades d&#39;una forma de text en binària.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Retorna el resultat de convertir el valor de text <code>text</code> en un binari (llista de <code>number</code>). <code>encoding</code> es pot especificar per indicar la codificació utilitzada al valor de text.      Els valors <code>BinaryEncoding</code> següents es poden utilitzar per a <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: codificació en base 64</li>        <li><code>BinaryEncoding.Hex</code>: codificació hexadecimal</li>      </ul>


## Examples

### Example #1 
Descodifica &#34;1011&#34; en binari.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Descodifica &#34;1011&#34; en binari amb codificació hexadecimal.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
