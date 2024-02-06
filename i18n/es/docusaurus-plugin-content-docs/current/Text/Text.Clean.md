---
title: Text.Clean
---

# Text.Clean


Devuelve el valor de texto con todos los caracteres de control quitados.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Devuelve un valor de texto con todos los caracteres de control de <code>text</code> quitados.


## Examples

### Example #1 
Permite quitar los saltos de línea y otros caracteres de control de un valor de texto.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
