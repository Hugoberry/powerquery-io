---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Primenjuje svaku zamenu za \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Obavlja date zamene u okviru liste <code>list</code>. Operacija zamene <code>replacements</code> se sastoji od liste sa dve vrednosti, stare i nove vrednosti, navedenih u obliku liste.    Može se navesti opcionalna vrednost kriterijuma jednakosti, <code>equationCriteria</code>, radi kontrole testiranja jednakosti.


## Examples

### Example #1 
Kreiranje liste od \{1, 2, 3, 4, 5}, pri čemu se vrednost 5 zamenjuje sa -5, a vrednost 1 sa -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
