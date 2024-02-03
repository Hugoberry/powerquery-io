---
title: Text.Trim
---

# Text.Trim


## Description

Elimina todos espazos en branco á esquerda e á dereita.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Devolve o resultado de eliminar todos os espazos en branco á esquerda e á dereita do valor de texto <code>text</code>.


## Examples

### Example #1 
Elimine os espazos en branco á esquerda e á dereita de &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
