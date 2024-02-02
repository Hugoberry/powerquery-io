---
title: Value.FromText
---

# Value.FromText


## Description

Crée une valeur fortement typée à partir d&#39;une représentation de texte.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Décode une valeur à partir d'une représentation de texte, <code>text</code>, et l'interprète comme une valeur de type approprié.    <code>Value.FromText</code> prend une valeur de texte et retourne un numéro, une valeur logique, une valeur null, une valeur datetime, une valeur de durée ou une valeur de texte. La valeur de texte vide est interprétée comme une valeur NULL.    Vous pouvez également fournir un <code>culture</code> facultatif (par exemple, "fr-fr").



## Category
Text.Conversions from and to text
