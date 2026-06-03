---
title: Logical.ToText
---

# Logical.ToText


Retourne le texte "true" ou "false" en fonction d'une valeur logique.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Crée une valeur de texte à partir de la valeur logique `logicalValue`, soit `true`, soit `false`. Si `logicalValue` n’est pas une valeur logique, une erreur est levée.


## Examples

### Example #1
Crée une valeur de texte à partir du `true` logique.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
