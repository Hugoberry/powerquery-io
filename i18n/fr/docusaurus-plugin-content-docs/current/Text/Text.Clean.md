---
title: Text.Clean
---

# Text.Clean


## Description

Retourne la valeur de texte après avoir supprimé tous les caractères de contrôle.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Retourne une valeur de texte après avoir supprimé tous les caractères de contrôle de <code>text</code>.


## Examples

### Example #1 
Supprimez les sauts de ligne et d’autres caractères de contrôle d’une valeur de texte.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
