---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Supprime une plage de caractères et insère une nouvelle valeur à la position spécifiée.


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

Retourne le résultat de la suppression d'un certain nombre de caractères, `count`, de la valeur de texte `text` en démarrant à la position `offset` puis en insérant la valeur de texte `newText` à la même position dans `text`.


## Examples

### Example #1
Remplace un seul caractère à la position 2 dans la valeur de texte « ABGF » par la nouvelle valeur de texte « CDE ».
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
