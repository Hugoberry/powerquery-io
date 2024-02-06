---
title: Text.Remove
---

# Text.Remove


Supprime toutes les occurrences du caractère ou de la liste de caractères à partir de la valeur de texte d&#39;entrée.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Retourne une copie d'une valeur de texte <code>text</code> en supprimant tous les caractères à partir de <code>removeChars</code>.  


## Examples

### Example #1 
Supprime les caractères e, et f ; de la valeur de texte.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
