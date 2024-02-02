---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Supprime tous les espaces de début.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

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
