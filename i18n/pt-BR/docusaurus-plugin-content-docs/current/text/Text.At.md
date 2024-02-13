---
title: Text.At
---

# Text.At


Retorna o caractere na posição especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Retorna o caractere no valor de texto <code>text</code> na posição <code>index</code>. O primeiro caractere do texto está na posição 0.


## Examples

### Example #1 
Localize o caractere na posição 4 na cadeia de caracteres &#34;Olá, Mundo&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
