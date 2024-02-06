---
title: Text.Upper
---

# Text.Upper


Convertit tous les caractères en majuscules.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Retourne le résultat de la conversion de tous les caractères de <code>text</code> en majuscules. Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").


## Examples

### Example #1 
Obtient la version en majuscules de &#34; aBcD &#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
