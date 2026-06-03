---
title: Text.Insert
---

# Text.Insert


Insere um valor de texto noutro numa posição específica.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Devolve o resultado da inserção do valor de texto `newText` no valor de texto `text` na posição `offset`. As posições começam no número 0.


## Examples

### Example #1
Inserir "C" entre "B" e "D" em "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
