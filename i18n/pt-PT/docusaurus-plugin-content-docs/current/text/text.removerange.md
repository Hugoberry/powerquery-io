---
title: Text.RemoveRange
---

# Text.RemoveRange


Remove uma contagem de carateres a partir do desvio especificado


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Devolve uma cópia do valor de texto `text` com todos os carateres da posição `offset` removidos. É possível utilizar um parâmetro opcional, `count`, para o número de carateres a remover. O valor predefinido de `count` é 1. Os valores de posição começam em 0.


## Examples

### Example #1
Remover 1 caráter do valor de texto "ABEFC" na posição 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Remover dois carateres do valor de texto "ABEFC" começando na posição 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
