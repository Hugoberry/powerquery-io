---
title: Text.RemoveRange
---

# Text.RemoveRange


Eliminar a conta de caracteres comezando no desprazamento indicado.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Devolve unha copia do valor de texto `text` con todos os caracteres desde a posición `offset` eliminados. O parámetro opcional `count` pódese usar para especificar o número de caracteres que se van eliminar. O valor predefinido de `count` é 1. Os valores de posición comezan en 0.


## Examples

### Example #1
Eliminar un carácter do valor de texto "ABEFC" na posición 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Eliminar dous caracteres do valor de texto "ABEFC" comezando na posición 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
