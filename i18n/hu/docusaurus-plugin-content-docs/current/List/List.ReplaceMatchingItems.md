---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Végrehajtja mindegyik \{ old, new } jellegű cserét.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Végrehajtja a megadott cseréket a(z) <code>list</code> listán. Egy lecserélést végző <code>replacements</code> művelet két értékből álló listát használ, a régi értéket és az új értéket tartalmazó listát.    Megadható egy nem kötelező <code>equationCriteria</code> egyenlőségi feltétel érték is az egyenlőségvizsgálat szabályozásához.


## Examples

### Example #1 
Lista létrehozása az \{1, 2, 3, 4, 5} listából az 5 érték -5 értékre cserélésével és az 1 érték -1 értékre cserélésével
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
