---
title: Text.Select
---

# Text.Select


Sélectionne toutes les occurrences du caractère ou de la liste de caractères à partir de la valeur de texte d'entrée.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Retourne une copie d'une valeur de texte `text` avec tous les caractères hors de `selectChars` supprimés.


## Examples

### Example #1
Sélectionnez tous les caractères dans la plage de "a" à "z" à partir de la valeur de texte.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
