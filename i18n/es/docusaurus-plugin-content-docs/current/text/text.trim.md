---
title: Text.Trim
---

# Text.Trim


Quita todos los espacios en blanco iniciales y finales.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devuelve el resultado de quitar todos los espacios en blanco iniciales y finales del valor de texto <code>text</code>.


## Examples

### Example #1 
Quitar los espacios en blanco iniciales y finales de &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
