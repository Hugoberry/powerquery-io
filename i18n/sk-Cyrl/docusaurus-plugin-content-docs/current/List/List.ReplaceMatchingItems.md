---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

použije každú náhradu zoznamu \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Vykoná dané náhrady v rámci zoznamu <code>list</code>. Operácia nahradenia <code>replacements</code> pozostáva zo zoznamu s dvomi hodnotami, s hodnotou old a hodnotou new, uvedenými v zozname.    Možno zadať voliteľnú hodnotu kritérií rovnosti <code>equationCriteria</code> na kontrolu testovania rovnosti.


## Examples

### Example #1 
Vytvorte zoznam zo zoznamu \{1, 2, 3, 4, 5} nahradením hodnoty 5 hodnotou –5 a nahradením hodnoty 1 hodnotou –1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
