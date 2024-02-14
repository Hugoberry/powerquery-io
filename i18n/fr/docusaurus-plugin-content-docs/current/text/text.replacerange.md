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

Retourne le résultat de la suppression d'un certain nombre de caractères, <code>count</code>, de la valeur de texte <code>text</code> en démarrant à la position <code>offset</code> puis en insérant la valeur de texte <code>newText</code> à la même position dans <code>text</code>.


## Examples

### Example #1 
Remplace un seul caractère à la position 2 dans la valeur de texte &#34; ABGF &#34; par la nouvelle valeur de texte &#34; CDE &#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
