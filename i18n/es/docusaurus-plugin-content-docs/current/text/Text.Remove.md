---
title: Text.Remove
---

# Text.Remove


Quita todas las coincidencias del carácter o de la lista de caracteres especificados del valor de texto de entrada.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Devuelve una copia del valor de texto <code>text</code> con todos los caracteres desde <code>removeChars</code> quitados.  


## Examples

### Example #1 
Quitar los caracteres , y ; del valor de texto.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
