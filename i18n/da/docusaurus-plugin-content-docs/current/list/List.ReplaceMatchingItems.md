---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Anvender de enkelte erstatninger af \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Udfører de angivne erstatninger på listen <code>list</code>. En erstatningshandling <code>replacements</code> består af en liste med to værdier, den gamle værdi og den nye værdi, som findes på en liste.    Du kan angive en valgfri kriterieværdi for ligningen, <code>equationCriteria</code>, for at styre kvalitetstesten.


## Examples

### Example #1 
Opret en liste ud fra \{1, 2, 3, 4, 5}, hvor værdien 5 erstattes med -5, og værdien 1 erstattes med -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
