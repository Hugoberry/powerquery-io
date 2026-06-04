---
title: Text.Remove
---

# Text.Remove


Elimina todas as ocorrencias do carácter indicado ou da lista de caracteres a partir do valor de entrada de texto.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Devolve unha copia do valor de texto `text` eliminados todos os caracteres dende `removeChars`.


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
