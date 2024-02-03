---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Aplică fiecare înlocuire de \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Efectuează înlocuirile specificate în lista <code>list</code>. O operaţie de înlocuire <code>replacements</code> este alcătuită dintr-o listă de două valori, valoarea veche şi valoarea nouă, furnizate într-o listă.    O valoare opţională pentru criteriile ecuaţiei, <code>equationCriteria</code>, poate fi specificată pentru a controla testarea egalităţii.


## Examples

### Example #1 
Creaţi o listă de la \{1, 2, 3, 4, 5} care înlocuieşte valoarea 5 cu -5 şi valoarea 1 cu -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
