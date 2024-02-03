---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Odstráni všetky výskyty vstupných hodnôt.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Odstráni všetky výskyty daných hodnôt v zozname <code>list2</code> zo zoznamu <code>list1</code>. Ak hodnoty v zozname <code>list2</code> neexistujú v zozname <code>list1</code>, vráti sa pôvodný zoznam.    Možno zadať voliteľnú hodnotu kritérií rovnosti <code>equationCriteria</code> na kontrolu testovania rovnosti. 


## Examples

### Example #1 
Vytvorte zoznam zo zoznamu \{1, 2, 3, 4, 5, 5} bez zoznamu \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
