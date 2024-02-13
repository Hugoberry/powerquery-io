---
title: List.ReplaceValue
---

# List.ReplaceValue


Recherche une liste pour la valeur spécifiée et la remplace.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Recherche une liste de valeurs, <code>list</code>, pour la valeur <code>oldValue</code> et remplace chaque occurrence avec la valeur de remplacement <code>newValue</code>.


## Examples

### Example #1 
Remplace toutes les valeurs &#34; a &#34; dans la liste \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} par &#34; A &#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
