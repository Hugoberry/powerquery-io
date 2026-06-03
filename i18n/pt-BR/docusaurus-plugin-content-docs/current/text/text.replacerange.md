---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Remove um intervalo de caracteres e insere um valor em uma posição especificada.


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

Retorna o resultado da remoção de um número de caracteres, `count`, do valor de texto `text` começando na posição `offset` e inserindo o valor de texto `newText` na mesma posição em `text`.


## Examples

### Example #1
Substitua um único caractere na posição 2 do valor de texto "ABGF" pelo novo valor de texto "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
