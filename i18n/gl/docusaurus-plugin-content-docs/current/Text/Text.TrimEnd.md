---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Elimina todos espazos en branco á dereita.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Devolve o resultado de eliminar todos os espazos en branco á dereita do valor de texto <code>text</code>.


## Examples

### Example #1 
Eliminar os espazos en branco á dereita de &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
