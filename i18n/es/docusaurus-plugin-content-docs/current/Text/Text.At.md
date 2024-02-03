---
title: Text.At
---

# Text.At


## Description

Devuelve el carácter en la posición especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Devuelve el carácter en el valor de texto <code>text</code>, en la posición <code>index</code>. El primer carácter del texto está en la posición 0.


## Examples

### Example #1 
Buscar el carácter en la posición 4 de la cadena &#34;Hola mundo&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
