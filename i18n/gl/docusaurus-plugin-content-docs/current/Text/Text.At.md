---
title: Text.At
---

# Text.At


## Description

Devolve o carácter que está na posición especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Devolve o carácter no valor de texto, <code>text</code>, que está na posición <code>index</code>. O primeiro carácter do texto que está na posición 0.


## Examples

### Example #1 
Buscar o carácter que está na posición 4 na cadea &#34;Ola, mundo&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
