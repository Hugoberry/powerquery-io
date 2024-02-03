---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Stosuje wszystkie zamiany wartości \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Wykonuje podane operacje zamiany na liście <code>list</code>. Operacja zamiany <code>replacements</code> obejmuje listę dwóch wartości, która zawiera starą wartość i nową wartość.    W celu sterowania sprawdzaniem równości można określić opcjonalną wartość kryterium równości <code>equationCriteria</code>.


## Examples

### Example #1 
Utwórz listę na podstawie listy \{1, 2, 3, 4, 5}, zamieniając wartość 5 na wartość -5 oraz wartość 1 na -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
