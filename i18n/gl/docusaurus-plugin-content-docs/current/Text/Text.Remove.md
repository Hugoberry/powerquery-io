---
title: Text.Remove
---

# Text.Remove


## Description

Elimina todas as ocorrencias do carácter indicado ou da lista de caracteres a partir do valor de entrada de texto.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Devolve unha copia do valor de texto <code>text</code> eliminados todos os caracteres dende <code>removeChars</code>.  


## Examples

### Example #1 
Eliminar os caracteres , e ; do valor de texto.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
