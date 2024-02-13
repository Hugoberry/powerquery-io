---
title: Text.TrimEnd
---

# Text.TrimEnd


Quita todos los espacios en blanco finales.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Devuelve el resultado de quitar todos los espacios en blanco finales del valor de texto <code>text</code>.


## Examples

### Example #1 
Quitar los espacios en blanco finales de &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
