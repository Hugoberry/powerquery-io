---
title: Duration.From
---

# Duration.From


Crée une durée à partir de la valeur spécifiée.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Retourne une valeur de durée de la valeur donnée.

-   `value` : valeur à partir de laquelle la durée est dérivée. Si la valeur donnée `value` est `nulle`, cette fonction retourne `nul`. Si la valeur donnée `value` est une `durée`, la valeur `value` est retournée. Les valeurs des types suivants peuvent être converties en valeur de `durée` :
    `texte`-    : valeur de `durée` provenant de formes textuelles de temps écoulé (j.h:m:s). Pour découvrir d’autres informations, consultez `Duration.FromText`.
    `nombre`-    : `durée` équivalente au nombre de jours entiers et fractions de jour exprimés par `value`.

Si `value` est d’un autre type, une erreur est renvoyée.


## Examples

### Example #1
Convertit `2.525` dans une valeur `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Convertissez la valeur de texte `« 2.05:55:20.34567 »` en une valeur de `durée`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
