---
title: Text.Insert
---

# Text.Insert


Insire un valor de texto noutro nunha posición determinada.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Devolve o resultado de inserir o valor de texto `newText` no valor de texto único `text` na posición `offset`. As posicións comezan no número 0.


## Examples

### Example #1
Insira "C" entre "B" e "D" en "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
