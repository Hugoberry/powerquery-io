---
title: List.Single
---

# List.Single


## Description

Vrátí jednu položku seznamu pro seznam o délce 1. Jinak vyvolá výjimku.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Pokud seznam <code>list</code> obsahuje pouze jedinou položku, vrátí tuto položku.    Pokud seznam obsahuje více než jednu položku nebo je prázdný, funkce vyvolá výjimku.


## Examples

### Example #1 
Vyhledá jednu hodnotu v seznamu \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Vyhledá jednu hodnotu v seznamu \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
