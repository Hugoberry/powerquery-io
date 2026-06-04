---
title: List.Single
---

# List.Single


Vrátí jednu položku seznamu pro seznam o délce 1. Jinak vyvolá chybu.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Pokud seznam `list` obsahuje pouze jedinou položku, vrátí tuto položku. Pokud seznam obsahuje více než jednu položku nebo je prázdný, funkce vyvolá chybu.


## Examples

### Example #1
Vyhledá jednu hodnotu v seznamu \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Vyhledá jednu hodnotu v seznamu \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
