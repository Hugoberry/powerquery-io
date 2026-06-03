---
title: Text.Insert
---

# Text.Insert


Insère une valeur de texte dans une autre, à une position spécifiée.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Retourne le résultat de la valeur de texte insérée `newText` dans la valeur de texte `text`, à la position `offset`. Les positions commencent au numéro 0.


## Examples

### Example #1
Insérez « C » entre « B » et « D » dans « ABD ».
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
