---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Aplica cada substitució de \{ old, new \}.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Duu a terme les substitucions donades a la llista `list`. Una operació de substitució `replacements` està formada per una llista de dos valors, el valor antic i el valor nou, proporcionats en una llista. Un valor de criteris d'equació opcional, `equationCriteria`, es pot especificar per controlar la prova d'igualtat.


## Examples

### Example #1
Crea una llista de \{1, 2, 3, 4, 5\} que substitueix el valor 5 per -5 i el valor 1, per -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
