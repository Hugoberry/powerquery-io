---
title: Text.Insert
---

# Text.Insert


Insereix un únic valor de text en un altre en una posició donada.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Retorna el resultat d'inserir el valor de text, `newText`, en el valor de text `text` a la posició `offset`. Les posicions comencen pel nombre 0.


## Examples

### Example #1
Insereix "C" entre "B" i "D" a "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
