---
title: Text.Select
---

# Text.Select


Sélectionne toutes les occurrences du caractère ou de la liste de caractères à partir de la valeur de texte d&#39;entrée.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Retourne une copie d'une valeur de texte <code>text</code> avec tous les caractères hors de <code>selectChars</code> supprimés.  


## Examples

### Example #1 
Sélectionnez tous les caractères dans la plage de &#34; a &#34; à &#34; z &#34; à partir de la valeur de texte.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
