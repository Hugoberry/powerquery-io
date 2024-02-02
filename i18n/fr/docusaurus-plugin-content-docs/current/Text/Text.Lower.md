---
title: Text.Lower
---

# Text.Lower


## Description

Convertit tous les caractères en minuscules.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Retourne le résultat de la conversion de tous les caractères en <code>text</code> en minuscules. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Obtient la version en minuscule de &#34; AbCd &#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
