---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Použije každé nahrazení \{ old, new \}.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Provede předaná nahrazení v seznamu `list`. Operace nahrazení `replacements` pracuje se seznamem dvou hodnot, staré hodnoty a nové hodnoty, předaných v seznamu. K řízení testování rovnosti lze zadat volitelnou hodnotu kritérií rovnice `equationCriteria`.


## Examples

### Example #1
Vytvoří seznam ze seznamu \{1, 2, 3, 4, 5\}, přičemž nahradí hodnotu 5 hodnotou -5 a hodnotu 1 hodnotou -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
