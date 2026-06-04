---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Elimina un intervalo de caracteres e insire un novo valor nunha posición especificada.


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

Devolve o resultado de eliminar un número de caracteres, `count` do valor de texto `text` comezando na posición `offset` e logo insire o valor de texto `newText` na mesma posición en `text`.


## Examples

### Example #1
Substituír un único carácter na posición 2 no valor de texto "ABGF" co novo valor de texto "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
