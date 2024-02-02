---
title: Text.Trim
---

# Text.Trim


## Description

Supprime tous les espaces de début et de fin.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Retourne le résultat de la suppression de tous les espaces de début et de fin d'une valeur de texte <code>text</code>.


## Examples

### Example #1 
Supprime les espaces de début et de fin de &#34;      a b c d     &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
