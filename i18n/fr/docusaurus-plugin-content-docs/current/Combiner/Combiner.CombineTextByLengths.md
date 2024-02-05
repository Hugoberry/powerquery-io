---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Renvoie une fonction qui combine une liste de texte en utilisant les longueurs spécifiées.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Renvoie une fonction qui combine une liste de valeurs de texte en une seule valeur de texte en utilisant les longueurs spécifiées.


## Examples

### Example #1 
Combinez une liste de valeurs de texte en extrayant le nombre de caractères spécifié de chaque valeur d&#39;entrée.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Combinez une liste de valeurs de texte en extrayant le nombre de caractères spécifié, après avoir d&#39;abord pré-rempli le résultat avec le texte du modèle.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
