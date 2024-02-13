---
title: List.FindText
---

# List.FindText


Retourne une liste des valeurs (champs d&#39;enregistrement compris) qui contiennent le texte spécifié.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Retourne une liste de valeurs à partir de la liste <code>list</code> qui contenait la valeur <code>text</code>.


## Examples

### Example #1 
Recherche les valeurs de texte dans la liste \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} qui correspondent à &#34; a &#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
