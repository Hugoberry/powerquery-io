---
title: List.FindText
---

# List.FindText


Retourne une liste des valeurs (champs d'enregistrement compris) qui contiennent le texte spécifié.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Retourne une liste de valeurs à partir de la liste `list` qui contenait la valeur `text`.


## Examples

### Example #1
Recherche les valeurs de texte dans la liste \{"a", "b", "ab"\} qui correspondent à « a ».
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
