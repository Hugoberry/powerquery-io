---
title: Text.At
---

# Text.At


Devolve o caráter existente na posição especificada.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Devolve o caráter existente na no valor de texto, <code>text</code>, na posição <code>index</code>. O primeiro caráter no texto encontra-se na posição 0.


## Examples

### Example #1 
Determinar o caráter existente na posição 4 da cadeia &#34;Olá, Mundo&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
