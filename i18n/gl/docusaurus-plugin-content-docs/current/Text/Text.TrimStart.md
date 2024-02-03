---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Eliminar todos espazos en branco á esquerda.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Devolve o resultado de eliminar todos os espazos en branco á esquerda do valor de texto <code>text</code>.


## Examples

### Example #1 
Eliminar os espazos en branco á esquerda de &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
