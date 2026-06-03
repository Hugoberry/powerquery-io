---
title: Text.Insert
---

# Text.Insert


Insira um valor de texto em outro na posição especificada.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Retorna o resultado da inserção do valor de texto `newText` no valor de texto `text` na posição `offset`. As posições começam no número 0.


## Examples

### Example #1
Insira "C" entre "B" e "D" em "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
