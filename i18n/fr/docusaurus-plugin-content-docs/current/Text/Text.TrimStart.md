---
title: Text.TrimStart
---

# Text.TrimStart


Supprime tous les espaces de début.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Retourne le résultat de la suppression de tous les espaces de début d'une valeur de texte <code>text</code>.


## Examples

### Example #1 
Supprime les espaces de début de &#34;      a b c d     &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
