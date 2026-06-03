---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Quita un intervalo de caracteres e inserta un nuevo valor en la posición especificada.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Devuelve el resultado de quitar varios caracteres, `count`, del valor de texto `text` a partir de la posición `offset` y después de insertar el valor de texto `newText` en la misma posición en `text`.


## Examples

### Example #1
Reemplazar un solo carácter en la posición 2 en el valor de texto "ABGF" con el nuevo valor de texto "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
