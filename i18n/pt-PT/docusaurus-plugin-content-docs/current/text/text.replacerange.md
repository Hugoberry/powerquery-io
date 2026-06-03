---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Remove um intervalo de carateres e insere um valor novo na posição especificada.


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

Devolve o resultado da remoção de um número de carateres, `count`, do valor de texto `text` começando na posição `offset` e, em seguida, inserindo o valor de texto `newText` na mesma posição em `text`.


## Examples

### Example #1
Substituir um caráter na posição 2 no valor de texto "ABGF" pelo novo valor de texto "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
