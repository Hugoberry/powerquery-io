---
title: Text.TrimStart
---

# Text.TrimStart


Quita todos los espacios en blanco iniciales.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devuelve el resultado de quitar todos los espacios en blanco iniciales del valor de texto <code>text</code>.


## Examples

### Example #1 
Quitar los espacios en blanco iniciales &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
